Linux use log
---

## install dnsmasq in macOS
- Install by brew
    ```
    brew install dnsmasq
    step by `brew info dnsmasq`
    ```

- Configure with /usr/local/etc/dnsmasq.conf
    ```
    - append the line 'address=/double-click.net/127.0.0.1':
    ddress=/double-click.net/127.0.0.1
    address=/dev/127.0.0.1
    - test:
    dig abc.dev @127.0.0.1 

    - return:  ANSWER SECTION
    abc.dev.                0       IN      A       127.0.0.1
    ```

- global wild valid
    ```
    - way 1.
    add in setting preferences
    - way 2.(according to `man 5 resolver`)
    sudo mkdir /etc/resolve
    echo 'nameserver 127.0.0.1' > /etc/resolve/dev
    ```




## To Be Continued

add last command word
```bash
pressing Esc+Dot or typing !$, !*
echo !:1
!^ or !:1
```


```bash
lsof | grep php-fpm
```

want to use remi repo to install new software
```bash
sudo yum --enablerepo=remi install php-tcpdf
```
you can list repositories by:
```bash
yum repolist
yum repolist disabled
```

want to find string without binary files
```bash
grep to_find_string . -r -I
```
- -r recursive
- -I ignore binary

检测 `vt-us1.vent.link` 到本地的 ping 时长
```bash
traceroute -T -p 33322 vt-us1.vnet.link
```

yum warning RPMDB alter out of yum. because of rpm use none yum api to modify soft
```bash
yum clean all
yum history sync
```
