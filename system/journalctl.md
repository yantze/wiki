# Journalclt
> see log with systemctl


Just use the journalctl command, as in:
```
journalctl -u service-name.service
```

Or, to see only log messages for the current boot:
```
journalctl -u service-name.service -b
```

For things named <something>.service, you can actually just use <something>, as in:
```
journalctl -u service-name
```
But for other sorts of units (sockets, targets, timers, etc), you need to be explicit.
