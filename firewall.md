# Firewall

> good guide:
[firewalld](http://www.certdepot.net/rhel7-get-started-firewalld/)

## Commands

### open a port permanent
```
firewall-cmd --zone=dmz --add-port=2888/tcp --permanent
```

if is a known service, you can use:
```
firewall-cmd --zone=public --add-service=http --permanent
```

and then reload the firewall
```
firewall-cmd --reload
```

list add firewall rules:
```
firewall-cmd --list-all
```

firewall-cmd --set-default-zone=<zone>:
```
firewall-cmd --zone=<zone> --query-port=80/tcp
```

trust source
```
firewall-cmd --permanent --zone=trusted --add-source=192.168.2.0/24
firewall-cmd --zone=trusted --list-sources
```

##advance
To know if Firewalld is running, root user
```
direwall-cmd --state

# or

systemctl status firewalld
```

##serveral network interfaces in IPv4:
if you’ve got several network interfaces in IPv4, you will have to activate ip forwarding.
To do that, paste the following line in the /etc/sysctl.conf file:
```
net.ipv4.ip_forward=1
```

Then, activate the configuration:
```
sysctl -p
```
Although Firewalld is the RHEL 7 way to deal with firewalls and provides many improvements, iptables can still be used (but both shouldn’t run at the same time).

###go back to a more classic iptables setup
```bash
yum install iptables-services
systemctl mask firewalld
systemctl enable iptables
systemctl enable ip6tables
systemctl stop firewalld
systemctl start iptables
systemctl start ip6tables
```

Enable the service at boot-time:
```
systemctl enable iptables
systemctl enable ip6tables
```

Saving firewall rules:
```
service iptables save

# or

/usr/libexec/iptables/iptables.init save
```

## Further Reading
http://www.certdepot.net/rhel7-get-started-firewalld/
