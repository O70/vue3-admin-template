# 代码同步方案

在使用以下方案之前，**组员** 与 **组长** 之间的代码一定要同步，组长的本地仓库代码可以比组员的代码老一些。

**在此之后，每天固定时间同步一次代码。**

不管使用以下的那种方案，切记以下几点：

- **组员**本地仓库该如何操作依然跟之前一样，切记保管好自己的代码仓库以及分支。

- **组长**相应的本地仓库在这段时间内是当做**组员**本地仓库的上游仓库

## 方案一

`git patch` 基本操作参考如下链接：
> https://www.cnblogs.com/ArsenalfanInECNU/p/8931377.html

以下阐述基本且最简单的操作。


**组员**在本地仓库提交后，每提交一次产生一个 `commit` 就打一次补丁：
``` sh
$ git format-patch -1 
```

然后使用即时通讯发送给**组长**，并且说明一下此次提交产生的大概变化。组长收到补丁后，使用以下命令检查并应用：

- 查看`patch`的情况
``` sh
$ git apply --stat <PATCH_NAME> 
```

- 检查`patch`是否能够打上，如果没有任何输出，则说明无冲突，可以打上
``` sh
$ git apply --check <PATCH_NAME> 
```

- 应用`patch`，根据实际情况可能需要解决冲突
``` sh
$ git apply <PATCH_NAME> 
```

**补丁(patch)是有顺序要求的，如果每次一个`commit`一个`patch`，在`apply`时应该严格注意顺序。**

**每个`commit`建议改动量尽量少或者不在原有文件上大改，以尽量减少代码冲突的可能性。**

如果对`git patch`使用比较熟练，可以一次对多个`commit`进行打补丁。

## 方案二

此方案的前提是都在**同一组网内**。

**组长**把自己的的本地仓库当成**组员**的远程仓库。比如组长的机器为`A`，组员的机器为`B`，现在要同步`application-ui`这个仓库，操作如下:

- 在`B`机器中的`application-ui`这个仓库下执行如下命令
```sh
$ git remote add networking ssh://<USERNAME>@<IP>:<PORT>:/path_to/application-ui.git
```

- 之后在`B`机器中的`application-ui`这个仓库下所有的操作懂跟之前一样正常进行，除了`pull`与`push`:
```sh
$ git pull networking <BRANCH_NAME>
$ git push networking <BRANCH_NAME>
```

当前方案主要是切换组员本地仓库的上游源。其支撑是需要`A`机器启动`ssh`服务。考虑**组长**大部分都是Windows系统，建议安装WSL，安装方法参考如下链接：https://docs.microsoft.com/zh-cn/windows/wsl/install

安装好WSL后，可以安装`Ubuntu`子系统，然后在子系统内安装`open-ssh`并开启。

当然除了WSL还有其他方法，比如使用docker，其原理和WSL是一回事。