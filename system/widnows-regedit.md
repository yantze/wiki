# 注册表常识

[HKEY_CLASSES_ROOTCLSID{不同的PROG ID对应不同的GUID}ProgID]

## 组成
- HKEY_CLASSES_ROOT  定义了系统中所有文件类型标识和基本操作标识

该主键包含文件扩展名和应用程序关联的信息

主键下的子键决定如何在资源管理器和桌面中显示该类文件及其图标

不是一个单独的分支，而只是HKEY_LOCAL_MACHINE\SOFTWARE\Classes的一个映射

- HKEY_CURRENT_USER  当前用户的配置信息，包括环境变量、桌面设置、网络连接、软件运行信息等

- HKEY_LOCAL_MACHINE 本机相关的系统信息，包括硬件信息、驱动信息、内存数据、总线数据等，其中的信息与特定用户无关，可供所有用户使用

- HKEY_USER 所有用户的信息，该子键下保存了改用户的桌面设置、背景位图、应用程序快捷键、字体等信息。 而这些信息都可以通过控制面板等工具设定。应用程序也不直接访问该主键，而是通过HKEY_CURRENT_USER主键进行访问。

- HKEY_CURRENT_CONFIG 本地计算机启动时的配置的相关信息。如环境信息、桌面主题、背景色之类，也只是HKEY_LOCAL_MACHINE\CONFIG结构中的一个映射。

## Reference
- https://blog.csdn.net/z702143700/article/details/46770813p
