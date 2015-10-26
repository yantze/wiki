杀掉进程
ps -ef | grep R3GOfferChg | grep -v grep | awk {‘print $2′} | xargs kill -9

列出 ip 地址
ifconfig | awk '/eth0/{getline;gsub(/addr:/,"",$2);print $2}'
