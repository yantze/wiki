# Linux 启动流程

上流程，这个是 Centos5/6 的启动流程：
- POST
- Boot device(harddisk)
- bootloader: MBR446byte: grub stage 1
- grub stage 1.5
- boot partition
- grub stage 2
- grub.conf
- kernal: vmlinuz
- initrd: initramfs
- rootfs
- init
- /etc/inittab
- /etc/rc.d/rc.sysinit
- /etc/rc#.d/{K*.sh | S*.sh}
- /etc/rc.d/rc.local
- login

Centos5/6 中使用 grub 作为 bootloader，也就是说，操作系统想要启动，就要靠它，早期的 linux 中，使用 LILO（linux loader）进行操作系统的引导工作，但是因为 LILO 的功能比较简单，随着发展，出现了 grub,  GRUB：Grand Unified Bootloader。更多介绍可以看看 ^[1]





## Ref
- [1] https://blog.51cto.com/zz6547/1852788