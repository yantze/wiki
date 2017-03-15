install qemu for 6.828
```
if
egrep '(vmx|svm)' /proc/cpuinfo
have some msg out,is more perfect

require
centos window

#this line must #yum install epel-release first
yum install qemu qemu-common qemu-guest-agent qemu-kvm-common qemu-system-x86 qemu-kvm-tools

#then process below line command
yum install qemu-kvm qemu-img virt-manager libvirt libvirt-python python-virtinst libvirt-client virt-install virt-viewer
```
