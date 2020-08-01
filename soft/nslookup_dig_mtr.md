# nslookup dig mtr

使用 tcp 查询 ip 地址
```
dig @114.114.114.114 +tcp www.baidu.com
```

使用dns server 的其它端口
```
dig @114.114.114.114 -p 5353 xxx.com
```

dig 有个很高级的功能 trace，即可以追踪输出每一级查询的具体信息，而不是只给一个最终结果
```
dig +trace xx.com
```

查找一个域名的真实ip地址
```
# TXT/spf records
# A TXT record is a type of DNS record that provides text information to sources outside your domain.
# Sender Policy Framework (SPF) records allow domain owners to publish a list of IP addresses or subnets that are authorized to send email on their behalf.
nslookup google.com 8.8.8.8
nslookup -vt google.com 8.8.8.8
# _netblocks.google.com describes ipv4 ranges
# _netblocks2.google.com describes ipv6 ranges
nslookup -debug -type=AAAA www.example.com.
nslookup -vc -q=txt _netblocks.google.com 8.8.4.4
nslookup -q=TXT _netblocks.google.com 8.8.4.4
dig @ns1.nameserver1.com domain.com txt
dig domain.com txt
traceroute -n -w 2 -q 2 -m 30 8.8.4.4
mtr -r vastiny.com 集win的ping、troucert、于一身

To Query MX (Mail Exchange) record.
nslookup -query=mx www.yahoo.com
To query NS(Name Server) record.
nslookup -query=ns www.yahoo.com
To query SOA (Start of Authority) record.
nslookup -type=soa www.yahoo.com
To query all Available DNS records.
nslookup -query=any yahoo.com
Enable Debug mode
nslookup -debug yahoo.com
```


## SeeAlso
- [network](/network.md)
