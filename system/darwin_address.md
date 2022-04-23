# change mac address

## Linux
```
# NetworkManager.conf
[connection]
wifi.cloned-mac-address=random
ethernet.cloned-mac-address=random
```

```
# Switch to dhclient
# NetworkManager.conf
[main]
dhcp=dhclient
```

```
# dhclient.conf
send host-name ""
send domain-name ""
```

## Mac
```
#!/bin/bash

randomMAC=`hexdump -n5 -e'/5 "02" 5/1 "-%02X"' /dev/random`
ifconfig en0 ether $randomMAC
```
