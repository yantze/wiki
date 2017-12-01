# 构建 https 网站

## 在 Mac 上使用
直接看我 StackOverflow 的回答，或者看 Ref-2

## 在 Linux Server 上使用自签
服务器生成自签证书并且部署到 nginx，把密钥下载到本地导入，参考 Ref-2

## 在 Linux Server 使用 Let's Encrypt
下载 certbot 执行：
```
./certbot-auto certonly --webroot -w /data/web/xxx.com/public -d dechat.im -m xxx@xxx.com --agree-tos

# 一般默认有效是一年，下次更新证书直接执行
./certbot-auto renew --quiet
```


## Ref
- 1. https://stackoverflow.com/questions/7580508/getting-chrome-to-accept-self-signed-localhost-certificate/44782848#44782848
- 2. https://ihower.tw/blog/archives/8861
