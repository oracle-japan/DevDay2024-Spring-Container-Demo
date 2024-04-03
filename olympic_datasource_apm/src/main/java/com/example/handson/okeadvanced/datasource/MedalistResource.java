
package com.example.handson.okeadvanced.datasource;

import jakarta.persistence.EntityManager;
import jakarta.persistence.PersistenceContext;
import jakarta.ws.rs.GET;
import jakarta.ws.rs.Path;
import jakarta.ws.rs.Produces;
import jakarta.ws.rs.core.Context;
import jakarta.ws.rs.core.MediaType;

import java.lang.System.Logger;
import java.lang.System.Logger.Level;
import java.util.List;

import org.slf4j.MDC;

import jakarta.ws.rs.core.HttpHeaders;

@Path("/medalist")
public class MedalistResource {

    @PersistenceContext(unitName = "test")
    private EntityManager entityManager;

    private static final String X_B3_TRACEID = "x-b3-traceid";
    private static final String X_B3_SPANID = "x-b3-spanid";

    private static final Logger logger = System.getLogger(MedalistResource.class.getName());

    @GET
    @Path("/v1")
    @Produces(MediaType.APPLICATION_JSON)
    public List<Medalist> getMedalistsV1(@Context HttpHeaders httpHeaders) {
        MDC.put("span_id", httpHeaders.getHeaderString(X_B3_TRACEID));
        MDC.put("trace_id", httpHeaders.getHeaderString(X_B3_SPANID));
        List<Medalist> result = entityManager.createNamedQuery("getBronzeMedalists", Medalist.class).getResultList();
        for(Medalist item: result){
            logger.log(Level.INFO, "result: %s", item.toString());
        }
        return result;
    }

    @GET
    @Path("/v2")
    @Produces(MediaType.APPLICATION_JSON)
    public List<Medalist> getMedalistsV2(@Context HttpHeaders httpHeaders) {
        MDC.put("span_id", httpHeaders.getHeaderString(X_B3_TRACEID));
        MDC.put("trace_id", httpHeaders.getHeaderString(X_B3_SPANID));
        List<Medalist> result = entityManager.createNamedQuery("getSilverMedalists", Medalist.class).getResultList();
        for(Medalist item: result){
            logger.log(Level.INFO, "result: %s", item.toString());
        }
        return result;
    }

    @GET
    @Path("/v3")
    @Produces(MediaType.APPLICATION_JSON)
    public List<Medalist> getMedalistsV3(@Context HttpHeaders httpHeaders) {
        MDC.put("span_id", httpHeaders.getHeaderString(X_B3_TRACEID));
        MDC.put("trace_id", httpHeaders.getHeaderString(X_B3_SPANID));
        List<Medalist> result = entityManager.createNamedQuery("getGoldMedalists", Medalist.class).getResultList();
        for(Medalist item: result){
            logger.log(Level.INFO, "result: %s", item.toString());
        }
        return result;
    }
}
