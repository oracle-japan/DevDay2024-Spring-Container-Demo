# Oracle Developer Days 2024 Spring Container Demo
2024/5/23,24開催のOracle Developer Days 2024 Spring Day1でのセッション「OCI Container Ecosystem 2024」で利用したデモです。

## 概要

Oracle Container Engine for Kubernetes（以下、OKE）にデモアプリケーションをデプロイし、Oracle Cloud Intrastructure（以下、OCI）でのObservabilityツールであるApplication Performance Monitoring（以下、APM）とLogging Analyticsという2つのサービスを利用したOCIでのOpenTelemetryを実装するためのデモです。

## ディレクトリ構成

```sh
.
├── k8s # Kubernetesマニフェスト
│   ├── olympic_backend.yaml
│   ├── olympic_datasource.yaml
│   ├── olympic_frontend.yaml
│   └── otel # OpenTelemetry関連マニフェスト
├── olympic_backend_apm # バックエンドアプリケーション
│   ├── Dockerfile
│   ├── pom.xml
│   ├── README.md
│   ├── src
│   └── target
├── olympic_datasource_apm # データソースアプリケーション
│   ├── Dockerfile
│   ├── pom.xml
│   ├── src
│   └── target
├── olympic_frontend_apm # フロントエンドアプリケーション　
│   ├── Dockerfile
│   ├── pom.xml
│   ├── README.md
│   ├── src
│   └── target
└── README.md
```

## 環境構築と動作確認

このサンプルアプリケーションのチュートリアルを後日公開予定です。
公開しましたら、こちらにURLを共有します。


