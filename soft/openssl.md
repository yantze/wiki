# OPENSSL 证书

## 生成 Certificates.p12 的方法
- Keychain Access -> Certificate Assistant -> Create Certificate Authority
- Name: 随便
- Identity Type: Self Signed Root CA
- User Certificate: SSL Server
- uncheck, Let me override defaults
- uncheck, Make this CA the default
- Email from: 随便
最后创建后，找到这个证书，然后右键导出为 .p12 格式，设置密码为 xxxx


## 默认生成文件
- localhost_ssl certificates.pem , localhost_ssl.certAuthorityConfig 是 KeyChain 默认生成的


## 转为服务器用的证书
用 p12 文件生成 key 和 crt 文件用于服务器
```
openssl pkcs12 -in Certificates.p12 -clcerts -nokeys -out certificate.crt
openssl pkcs12 -in Certificates.p12 -nocerts -out private.key
```
在生成 private.key 要创建 PEM pass phrase 密码，密码 xxxx

## 方法二，command line
```
openssl req \
    -newkey rsa:2048 \
    -x509 \
    -nodes \
    -keyout yoursite.key \
    -new \
    -out yoursite.crt \
    -subj /CN=yoursite.dev \
    -reqexts SAN \
    -extensions SAN \
    -config <(cat /System/Library/OpenSSL/openssl.cnf \
        <(printf '[SAN]\nsubjectAltName=DNS:yoursite.dev')) \
    -sha256 \
    -days 3650
```

```
openssl req -newkey rsa:2048 -nodes -keyout key.pem -x509 -days 365 -out cert.pem -subj "/C=CN/ST=Utah/L=Provo/O=Vastiny Inc/CN=127.0.0.1"
```

添加到 `Keychain Access.app` 中，
```
sudo security add-trusted-cert -d -r trustRoot -k /Library/Keychains/System.keychain .ssl/ihower.crt
```


## 设置 nginx 监听 443 端口
```
server {
    listen 80;
    listen 443 ssl;
    server_name xxx.zhi.local;
    index       index.html;

    ssl_certificate /Users/userb/Dropbox/p12/certificate.crt;
    ssl_certificate_key /Users/userb/Dropbox/p12/privateKey.key;
```

## pfx/p12 证书生成
PEM (.pem, .crt, .cer) to PFX

```
openssl pkcs12 -export -out certificate.pfx -inkey privateKey.key -in certificate.crt -certfile more.crt

openssl – the command for executing OpenSSL
pkcs12 – the file utility for PKCS#12 files in OpenSSL
-export -out certificate.pfx – export and save the PFX file as certificate.pfx
-inkey privateKey.key – use the private key file privateKey.key as the private key to combine with the certificate.
-in certificate.crt – use certificate.crt as the certificate the private key will be combined with.
-certfile more.crt – This is optional, this is if you have any additional certificates you would like to include in the PFX file.
```

## Reference
- https://serverfault.com/questions/413832/generate-key-and-crt-from-pkcs12-file
- https://medium.com/@Blankwonder/surge-mitm-5281d8ace79d
- https://stackoverflow.com/questions/7580508/getting-chrome-to-accept-self-signed-localhost-certificate/44782848#44782848
- https://www.ssl.com/how-to/create-a-pfx-p12-certificate-file-using-openssl/
