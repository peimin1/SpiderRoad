#### Ansible

- Ansible 是个与 [Puppet](https://www.w3cschool.cn/timlc/timlc-g7tv24yc.html), SaltStack, Chef 并驾齐驱的组态设定 (Infrastructure as Code) 工具，其简单易用的特性让人爱不释手，在 DevOps 界更佔有一席之地。
- Ansible 提供一种最简单的方式用于发布、管理和编排计算机系统的工具，你可在数分钟内搞定。
- Ansible 是一个模型驱动的配置管理器，支持多节点发布、远程任务执行。默认使用 SSH 进行远程连接。无需在被管理节点上安装附加软件，可使用各种编程语言进行扩展。

Ansible是一个配置管理和配置工具，类似于Chef，Puppet或Salt。这是一款很简单也很容易入门的部署工具，它使用SSH连接到服务器并运行配置好的任务，服务器上不用安装任何多余的软件，只需要开启ssh，所有工作都交给client端的ansible负责。
关于Ansible的一个好处是，将bash脚本转换为可执行任务是非常容易的。我们可以编写自己的配置程序，但是Ansible更加干净，因为它可以自动在执行任务之前获取上下文。ansible任务是幂等的，没有大量额外的编码，ansible可以一次又一次地安全运，而bash命令这种幂等性。
ansible使用“facts”来确保任务的幂等安全运行， 它是在运行任务之前收集的系统和环境信息。ansible使用这些facts来检查状态，看看是否需要改变某些东西以获得所需的结果。这使得ansible可以让服务器一次又一次地运行可复制的任务。

# 1 安装

当然我们需要先安装Ansible。任务可以从任何可安装的机器上运行。

### 1.1 Ubuntu

在Ubuntu 16.04上安装Ansible的方法。

```
sudo apt-get install -y ansible1
```

apt-get安装的ansible版本很低，建议使用pip方式安装

```
sudo pip install ansible
```

# 2 配置

ansible的默认配置文件路径为 /etc/ansible，然而，一个常见的用途是将其安装在一个virtualenv中，在这种情况下，我们一般不会使用这些默认文件。我们可以根据需要在本地目录中创建配置文件。

## 2.1 管理服务器：Inventory文件

您可以创建一个inventory文件，用于定义将要管理的服务器。这个文件可以命名为任何名字，但我们通常会命名为hosts或者项目的名称。
在hosts文件中，我们可以定义一些要管理的服务器。这里我们将定义我们可能要在“web”标签下管理的两个服务器。标签是任意的。

```
[web]
192.168.22.10
192.168.22.11123
```

现在已经够好了，如果需要，我们可以定义主机范围，多个组，可重用变量，并使用其他花哨的设置，包括创建动态的inventory。
当我们在本地机器运行ansible时，我们不需要关心inventory文件中的内容，我将告诉您在本地和远程服务器上运行ansible。现在，让我们将hosts文件设置为指向本地主机local和remote虚拟远程主机。
hosts文件：

```
[local]
127.0.0.1

[remote]
192.168.1.212345
```

与本地主机和远程服务器连接的命令。

命令说明

```
-i ./hosts - 设置库存文件，命名为 hosts
remote，local，all-使用这个标签的下定义的服务器hosts清单文件。“all”是针对文件中定义的每个服务器运行的特殊关键字
-m ping- 使用“ping”模块，它只是运行ping命令并返回结果
-c local| --connection=local - 在本地服务器上运行命令，而不是SSH

一些常用命令：
-i PATH --inventory=PATH 指定host文件的路径，默认是在/etc/ansible/hosts
--private-key=PRIVATE_KEY_FILE_PATH 使用指定路径的秘钥建立认证连接
-m DIRECTORY --module-path=DIRECTORY 指定module的目录来加载module，默认是/usr/share/ansible
-c CONNECTION --connection=CONNECTION 指定建立连接的类型，一般有ssh ，local
```

### 2.2.1 模块（Modules）

ansible使用“模块”来完成大部分的任务。模块可以做安装软件，复制文件，使用模板等等。

#### 模块是使用Ansible 的方法

因为它们可以使用可用的上下文（“Facts”），以便确定要完成任务需要做什么操作。
如果我们没有模块，我们将运行任意的shell命令，我们也可以使用bash脚本。这是一个任意shell命令看起来像在Ansible（它使用的shell模块！）：

```
# Run against a local server
ansible -i ./hosts local --connection=local -b --become-user=root \
    -m shell -a 'apt-get install nginx'

# Run against a remote server
ansible -i ./hosts remote -b --become-user=root all \
    -m shell -a 'apt-get install nginx'1234567
```

这里，sudo apt-get install nginx命令将使用“shell”模块运行。

但是这并不是特别强大。尽管能够一次在所有服务器上运行这些命令，但是我们仍然只能完成任何bash脚本可能执行的操作。如果我们使用了更合适的模块，我们可以运行命令来保证结果。可靠的模块确保我们可以一次又一次地运行相同的任务，而不会影响最终结果。
要在Debian / Ubuntu服务器上安装软件，“apt”模块将运行相同的命令，但确保幂等。

```
-i ./hosts - 设置inventory文件，命名为 hosts
-b - “成”，告诉可以成为另一个用户来运行命令
--become-user=root - 以用户“root”运行以下命令（例如，使用“sudo”命令）
local| remote - 从库存文件中的本地或远程定义的主机上运行
-m apt- 使用apt模块
-a 'name=nginx state=installed update_cache=true' - 提供apt模块的参数，包括软件包名称，所需的结束状态以及是否更新软件包存储库缓存

常用命令：
-u USERNAME --user=USERNAME 指定移动端的执行用户
-U SUDO_USERNAME --sudo-user=USERNAME
-s --sudo -u指定用户的时候，使用sudo获得root权限
-k --ask-pass  提示输入ssh的密码，而不是使用基于ssh的密钥认证
-K --ask-sudo-pass 提示输入sudo密码，与--sudo一起使用
```

## 2.3 剧本（Playbooks）

laybook可以运行多个任务，并提供一些更高级的功能。让我们将上述任务移到一本剧本中。在ansible中剧本（playbooks）和角色（roles）都使用Yaml文件定义。
创建文件nginx.yml：

### 2.3.1 处理程序（Handlers）

处理程序与任务完全相同（它可以做task可以做的任何事），但只有当另一个任务调用它时才会运行。您可以将其视为事件系统的一部分; 处理程序将通过其侦听的事件调用进行操作。
这对于运行任务后可能需要的“辅助”操作非常有用，例如在配置更改后安装或重新加载服务后启动新服务。

## 2.4 角色（roles）



角色很适合组织多个相关任务并封装完成这些任务所需的数据。例如，安装Nginx可能涉及添加软件包存储库，安装软件包和设置配置。
此外，真实的配置通常需要额外的数据，如变量，文件，动态模板等等。这些工具可以与Playbook一起使用，但是我们可以通过将相关任务和数据组织成一个角色（role， 相关的结构）很快就能做得更好。
角色有一个这样的目录结构：

```
roles
  rolename
   - files
   - handlers
   - meta
   - templates
   - tasks
   - vars
```

### 2.4.8 运行角色（Running the Role）

要对服务器运行一个或多个角色，我们将重新使用另一个playbook。该playbook与roles目录位于同一个目录中，同一层级。当我们用ansible-playbook命令运行的时候需要先cd进入到该目录中。
让我们创建一个“主”的yaml文件（被ansible-playbook命令执行的文件），该文件定义要使用的角色以及运行它们的主机：
文件~/ansible-example/server.yml位于与roles目录相同的目录中：

配置集群需要打通ssh