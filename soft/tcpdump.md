# Tcpdump

capture icmp
```
tcpdump -D # list interfaces
tcpdump icmp
tcpdump -v icmp # verbose mode
tcpdump -i en0
tcpdump -vi en0 icmp
```

```
# 用tcpdump嗅探80端口的访问看看谁最高
sudo tcpdump -i eth7 -tnn dst port 80 -c 1000 | awk -F "." '{print $1"."$2"."$3"."$4}' | sort | uniq -c | sort-nr |head -20
sudo tcpdump -i pktap,lo0 port 8080 -n -v
```


## More
- https://forum.ivorde.com/tcpdump-how-to-to-capture-only-icmp-ping-echo-requests-t15191.html
- https://www.rationallyparanoid.com/articles/tcpdump.html
