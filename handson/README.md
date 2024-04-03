# Day1ハンズオン

## 1.事前準備

Oracle Functionsを利用する上で、必要な事前準備を行います。

### 1-1.OICDの確認

OCIR(Oracle Functionsを管理するOracle提供のプライベートDockerレジストリ)にログインするための認証tokenを作成します。

作成の上で必要となる情報を取集します。

画面左上にあるハンバーガーメニューをクリックして、「アイデンティティとセキュリティ」-「コンパートメント」を選択します。

![OICDの確認 1](images/1-001.png)

ご自身の名前のコンパートメントを選択します。

![OICDの確認 2](images/1-002.png)

「コンパートメント情報」にある「OCID」の「コピー」テキストをクリックして、クリップボードにコピーします。

![OICDの確認 3](images/1-003.png)

コピーした内容は、テキストエディタなどにペーストしてください。

### 1-2.認証トークンの作成

画面右上の人型のマークが表示されている箇所をクリックします。さらに、展開されたメニューのユーザー名部分をクリックします。

![認証トークンの作成 1](images/1-004.png)

画面左下にある「認証トークン」をクリックします。

![認証トークンの作成 2](images/1-005.png)

「トークンの生成」ボタンをクリックします。

![認証トークンの作成 3](images/1-006.png)

「説明」に `This token is used for Oracle Functions Handson` と入力して、「トークンの生成」ボタンをクリックします。

![認証トークンの作成 4](images/1-007.png)

「コピー」テキストをクリックして、クリップボードにコピーします。コピーした内容は、テキストエディタなどにペーストしてください。
「閉じる」ボタンをクリックします。

![認証トークンの作成 5](images/1-008.png)

### 1-3.オブジェクト・ストレージ・ネームスペースの確認

画面右上の人型のマークが表示されている箇所をクリックします。さらに、展開されたメニューのテナンシ部分をクリックします。

![オブジェクト・ストレージ・ネームスペースの確認 1](images/1-009.png)

「オブジェクト・ストレージ・ネームスペース」をコピーして、テキストエディタなどにペーストしてください。

![オブジェクト・ストレージ・ネームスペースの確認 2](images/1-010.png)

### 1-4.Oracle Functions CLI contextの作成と設定確認

Oracle FunctionsをデプロイするためのにOracle Functions CLIを利用して環境を作成します。開発環境の設定は、fn updateコマンドを使用して行います。

最初に、Cloud Shell CLIを起動します。画面上部の「Cloud Shell」アイコンをクリックします。

![Oracle Functions CLI contextの作成と設定確認 1](images/1-011.png)

画面下方にコンソールが起動します。

![Oracle Functions CLI contextの作成と設定確認 2](images/1-012.png)


以下のコマンドを実行し、今選択されているcontextを確認します。`ap-osaka-1` に「*」が付いていれば問題ありません。

```sh
fn list context
```
***コマンド結果***
```sh
CURRENT NAME            PROVIDER        API URL                                                 REGISTRY
*       ap-osaka-1      oracle-cs       https://functions.ap-osaka-1.oci.oraclecloud.com        kix.ocir.io/xxxxxxxxxxxx/functions-handson
        default         oracle-cs
```

もし`ap-osaka-1` に「*」が無い場合は、以下の手順を実行してください。

```sh
fn use context ap-osaka-1
```

以下のコマンドを実行し、コンパートメントIDを設定します。
`[compartment-ocid]` には、テキストエディタにペーストしたOCIDを入力します。


```sh
fn update context oracle.compartment-id [compartment-ocid]
```
***コマンド結果***
```sh
Current context updated oracle.compartment-id with ocid1.compartment.oc1..xxxxxxxxxx
```

以下のコマンドを実行し、OCIRを設定します。
`[オブジェクト・ストレージ・ネームスペース]` には、テキストエディタにペーストしたオブジェクト・ストレージ・ネームスペースを入力します。

```sh
fn update context registry kix.ocir.io/[オブジェクト・ストレージ・ネームスペース]/functions-handson
```
***コマンド結果***
```sh
Current context updated registry with kix.ocir.io/xxxxxxxxxxx/functions-handson
```

以下のコマンドを実行し、Oracle Functionsで使用するprofile名を設定します。
profile名は、今回 `DEFAULT`(OCI CLIセットアップ時に設定されるデフォルトのprofile名)を入力します。

```sh
fn update context oracle.profile "DEFAULT"
```
***コマンド結果***
```sh
Current context updated oracle.profile with DEFAULT
```

以下のコマンドを実行し、OCIRにログインできることを確認します。(本ハンズオンでは、ap-osaka-1を使用しているので、”kix”としています。)   ログインの際にユーザー名とパスワードを要求されます。
「Username」はそのままEnterキーを押してください。  「Password」はテキストエディタにペーストした認証トークンを入力してください。

```sh
docker login kix.ocir.io
```
***コマンド結果***
```sh
Username (xxxxxxxxx/oracleidentitycloudservice/xxxxx.xxxxx@xxxxx.com): 
Password: 
WARNING! Your password will be stored unencrypted in /home/yutaka_ich/.docker/config.json.
Configure a credential helper to remove this warning. See
https://docs.docker.com/engine/reference/commandline/login/#credentials-store

Login Succeeded
```

### 1-5.コンピュートの作成

ハンズオンで使用する仮想マシンインスタンスを作成します。

画面左上にあるハンバーガーメニューをクリックして、「コンピュート」-「インスタンス」を選択します。

![コンピュートの作成 1](images/1-013.png)

「インスタンスの作成」ボタンをクリックします。

![コンピュートの作成 2](images/1-014.png)

「イメージとシェイプ」の「編集」テキストをクリックします。

![コンピュートの作成 3](images/1-015.png)

「Shape」の「Change Shape」ボタンをクリックします。

![コンピュートの作成 4](images/1-016.png)

「シェイプ・シリーズ」で「Intel」を選択して、「VM.Standard2.1」にチェックを入れて、「シェイプの選択」ボタンをクリックします。

![コンピュートの作成 5](images/1-017.png)

「SSHキーの追加」で「秘密キーの保存」ボタンをクリックして、キーをダウンロードします。

![コンピュートの作成 6](images/1-018.png)

「作成」ボタンをクリックして、コンピュートを作成します。

![コンピュートの作成 7](images/1-019.png)

「実行中」であることを確認して、「パブリックIPアドレス」を確認します。

![コンピュートの作成 8](images/1-020.png)

Cloud Shellから作成したコンピュートインスタンスにSSH接続します。最初に、ダウンロードした「秘密キー」をCloud Shellにアップロードします。

Cloud Shellのハンバーガーメニューをクリックして、「アップロード」を選択します。

![コンピュートの作成 9](images/1-021.png)

「コンピュータから選択」リンクテキストをクリックして、ダウンロードした秘密キー「sssh-key-2021-xx-xx.key」ファイルを選択します。そして、「アップロード」ボタンをクリックします。

左上に表示されるダイアログは、「非表示」テキストリンクをクリックすると非表示できます。

ホームディレクトリに「秘密キー」がアップロードされるので、以下コマンドを実行して、コンピュートインスタンスにログインします。接続するIPアドレスは、事前に確認したパブリックIPアドレスを利用してください。  「Are you sure you want to continue connecting (yes/no)?」には、「yes」と入力してください。

```sh
chmod 400 ./ssh-key-2021-xx-xx.key
```
```sh
ssh -i ./ssh-key-2021-xx-xx.key opc@xx.xx.xx.xx
```
***コマンド結果***
```sh
The authenticity of host 'xx.xx.xx.xx (xx.xx.xx.xx)' can't be established.
ECDSA key fingerprint is SHA256:xu6Nv2aitxGnOm1pQUj3HgMwLLxExdLocD0QamFQCp8.
ECDSA key fingerprint is MD5:c7:59:36:0d:7a:60:9b:79:ef:85:a2:86:39:80:63:4d.
Are you sure you want to continue connecting (yes/no)? yes
Warning: Permanently added 'xx.xx.xx.xx' (ECDSA) to the list of known hosts.
```

一度ログアウトします。

```sh
exit
```
***コマンド結果***
```
logout
Connection to xx.xx.xx.xx closed.
```

これでコンピュートインスタンスの作成とログインは完了となります。

このコンピュートインスタンスで負荷をかけながらメモリ消費させて、Functionから「VM.Standard2.2」に自動変更させるハンズオンをいよいよ実施します。

以下のページにアクセスしてください。

https://oracle-japan.github.io/ocitutorials/cloud-native/functions-vmshape-for-intermediates/

リンク先のページの「1.事前準備」は、完了しているので、「2.Oracle Functionsの作成」から始めます。

# Day2ハンズオン

Day2のハンズオンは、以下リンク先のページに従って行いますので、ページにアクセスしてください。

https://oracle-japan.github.io/ocitutorials/cloud-native/oke-for-advances/




