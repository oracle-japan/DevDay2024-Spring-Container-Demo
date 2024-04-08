package com.example.handson.okeadvanced.backend;

import java.lang.System.Logger;
import java.lang.System.Logger.Level;
import jakarta.ws.rs.client.ClientBuilder;
import jakarta.ws.rs.client.Client;
import jakarta.ws.rs.client.WebTarget;
import jakarta.ws.rs.GET;
import jakarta.ws.rs.Path;
import jakarta.ws.rs.Produces;
import jakarta.ws.rs.core.Context;
import jakarta.ws.rs.core.HttpHeaders;
import jakarta.ws.rs.core.MediaType;
import org.eclipse.microprofile.config.ConfigProvider;

@Path("/medalist")
public class Medalist {

    // 環境変数からバージョン情報を取得(DockerfileのENVで設定済み)
    private static final String SERVICE_VERSION = System.getenv("SERVICE_VERSION") == null ? "V1"
            : System.getenv("SERVICE_VERSION");

    // データソースのホスト・ポート
    private static final String BACKEND_HOSTNAME = ConfigProvider.getConfig()
            .getOptionalValue("app.service.hostname", String.class).orElse("localhost") + ":"
            + ConfigProvider.getConfig().getOptionalValue("app.service.port", String.class).orElse("8080");

    // トレーシング用のヘッダー定義
    private static final String SERVICE_PATH_V1 = "medalist/v1";
    private static final String SERVICE_PATH_V2 = "medalist/v2";
    private static final String SERVICE_PATH_V3 = "medalist/v3";
    private static final Logger logger = System.getLogger(Medalist.class.getName());
    private static final String X_REQIEST_ID = "x-request-id";
    private static final String X_B3_TRACEID = "x-b3-traceid";
    private static final String X_B3_SPANID = "x-b3-spanid";
    private static final String X_B3_PARENTSPANID = "x-b3-parentspanid";
    private static final String X_B3_SAMPLED = "x-b3-sampled";
    private static final String X_B3_FLAGS = "x-b3-flags";
    private static final String X_OT_SPAN_CONTEXT = "x-ot-span-context";
    private static final String B3 = "b3";

    @GET
    @Produces(MediaType.APPLICATION_JSON)
    public String getMedalist(@Context HttpHeaders headers) {

        logger.log(Level.INFO, "invoke frontend method: %s",
                Thread.currentThread().getStackTrace()[1].getMethodName());
        logger.log(Level.INFO, "Service Version: %s", SERVICE_VERSION);

        WebTarget target = null;
        // バージョンに応じてデータソースの呼び出し先を設定
        switch (SERVICE_VERSION) {
            case "V3":
                target = getURL(SERVICE_PATH_V3);
                break;
            case "V2":
                target = getURL(SERVICE_PATH_V2);
                break;
            default:
                target = getURL(SERVICE_PATH_V1);
                break;
        }

        // データソース呼び出し時にIngress-Gatewayからのヘッダー情報を付与（トレーシングのため）
        String result = target.request().header(X_REQIEST_ID, headers.getHeaderString(X_REQIEST_ID))
                .header(X_B3_TRACEID, headers.getHeaderString(X_B3_TRACEID))
                .header(X_B3_SPANID, headers.getHeaderString(X_B3_SPANID))
                .header(X_B3_PARENTSPANID, headers.getHeaderString(X_B3_PARENTSPANID))
                .header(X_B3_SAMPLED, headers.getHeaderString(X_B3_SAMPLED))
                .header(X_B3_FLAGS, headers.getHeaderString(X_B3_FLAGS)).header(B3, headers.getHeaderString(B3))
                .header(X_OT_SPAN_CONTEXT, headers.getHeaderString(X_OT_SPAN_CONTEXT)).get(String.class);

        logger.log(Level.INFO, "backend method end: %s", Thread.currentThread().getStackTrace()[1].getMethodName());

        return result;
    }

    private WebTarget getURL(String serviceURL) {
        Client client = ClientBuilder.newClient();
        WebTarget target = client.target(BACKEND_HOSTNAME).path(serviceURL);
        logger.log(Level.INFO, "Service URL: %s", target.toString());
        return target;
    }

}
