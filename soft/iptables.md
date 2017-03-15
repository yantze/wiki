# iptables

```
# Flush all current rules from iptables
 iptables -F

#限定apache每秒钟连接数为1,峰值为3
iptables -A INPUT -d 172.16.100.1 -p tcp –dport 80 -m limit –limit 1/second –limit-burst 3 -j ACCEPT
c 代表请求的网页数目,越大越准
n 代表并发2000

# Allow SSH connections on tcp port 22
# This is essential when working on remote servers via SSH to prevent locking yourself out of the system
 iptables -A INPUT -p tcp --dport 22 -j ACCEPT

# Accept packets from trusted IP addresses
 iptables -A INPUT -s 192.168.0.0/24 -j ACCEPT  # using standard slash notation

# Accept tcp packets on destination port 22 (SSH) from private LAN
 iptables -A INPUT -p tcp -s 192.168.0.0/24 --dport 22 -j ACCEPT

# Accept tcp packets on destination ports 6881-6890
 iptables -A INPUT -p tcp --dport 6881:6890 -j ACCEPT

# Accept packets from trusted IP addresses
 iptables -A INPUT -s 192.168.0.4 -m mac --mac-source 00:50:8D:FD:E6:32 -j ACCEPT

#Interface
iptables -A INPUT -i lo -j ACCEPT
iptables -A INPUT -i eth0 -j ACCEPT

# This is the rule that does most of the work, and again we are adding (-A) it to the INPUT chain.
# Here we're using the -m switch to load a module (state).
# The state module is able to examine the state of a packet and determine if it is NEW, ESTABLISHED or RELATED.
# NEW refers to incoming packets that are new incoming connections that weren't initiated by the host system.
# ESTABLISHED and RELATED refers to incoming packets that are part of an already established connection or related to and already established connection.
iptables -A INPUT -m state --state ESTABLISHED,RELATED -j ACCEPT

# Set default policies for INPUT, FORWARD and OUTPUT chains
 iptables -P INPUT DROP
 iptables -P FORWARD DROP
 iptables -P OUTPUT ACCEPT

# Set access for localhost
 iptables -A INPUT -i lo -j ACCEPT

# Accept packets belonging to established and related connections
 iptables -A INPUT -m state --state ESTABLISHED,RELATED -j ACCEPT

# Save settings
 /sbin/service iptables save

# List rules -L(List ruleset) -v(verbose) -n(numeric) -line-numbers
 iptables -L -v -n -line-numbers

# list INPUT ruleset
 iptables -L INPUT

# delete rule no.5 from INPUT chain, use line-numbers
 iptables -D INPUT 5

# insert or append rule to INPUT chain in between 4 and 5 ruleset
 iptables -I INPUT 5 -s ipaddress -j DROP

```

## Reference
- http://wiki.centos.org/HowTos/Network/IPTables
- this image may useful [Packet filtering in IPTables](https://access.redhat.com/documentation/en-US/Red_Hat_Enterprise_Linux/6/html/Security_Guide/images/iptables_small.png)
- this page may useful https://wiki.archlinux.org/index.php/iptables
- https://help.ubuntu.com/community/IptablesHowTo
- https://access.redhat.com/documentation/en-US/Red_Hat_Enterprise_Linux/6/html/Security_Guide/sect-Security_Guide-IPTables.html


