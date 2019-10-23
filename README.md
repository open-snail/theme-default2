# theme-default2

# 介绍
 什么是helloblog这里给个我之前的文章说明下[什么是hello blog](https://www.byteblogs.com/article/156)

之前上线的默认主题不少网友说不行，尤其是在seo方面，于是我决定用nux.js开发一个简单的主题。这个页面是有[Yancy](https://github.com/986244073)实现的。在这里也非常感谢这位小伙伴的贡献。这里是他的博客。[主题的源代码](https://github.com/byteblogs168/theme-default2)

预览地址 [Yancy的博客](http://yancy.byteblogs.com/)

# 主题界面
## 首页
![QQ截图20191023114634.png](http://image.byteblogs.com/2019102311484772920006208374036971.png)

## 标签
![QQ截图20191023114644.png](http://image.byteblogs.com/2019102311490338920006224034325019.png)

## 归档
![QQ截图20191019152143.png](http://image.byteblogs.com/2019101915291952219673840167288598.png)

## 友情链接
![QQ截图20191019152158.png](http://image.byteblogs.com/2019101915293846919673859114133025.png)

# 总结界面比较简洁简单，适合大部分的小伙伴作为个人的博客。

**你觉得还可以就给个Star吧。**

* [加入我们的QQ群](https://shang.qq.com/wpa/qunwpa?idkey=e4098dabb3b751808044bdf58900ad733b983d7efbb5142c5485ececacf3c00d)
* [我的个人博客地址](http://helloblog.byteblogs.com)
* [文档地址](http://helloblog.byteblogs.com/docs/)
* [后端代码github地址](https://github.com/byteblogs168/hello-blog)
* [管理系统github地址](https://github.com/byteblogs168/hello-blog-admin)
* [默认主题](https://github.com/byteblogs168/theme-default)
* [默认主题2](https://github.com/byteblogs168/theme-default2)


## 安装nuxt

[教程](https://www.byteblogs.com/article/38)

```
# .nuxt 文件你需要在项目下面 执行下面 命令得到
npm bulid

# 后面直接就
npm install

# 安装 pm2
npm install pm2 -g

# 启动 
pm2 start npm --name nuxt -- start

# 停止
pm2 stop all #停止PM2列表中所有的进程
pm2 stop 0 #停止PM2列表中进程为0的进程

# 日志
pm2 logs
```

# 如何解决centos的nodejs npm版本的升级

[教程](https://www.byteblogs.com/article/168)

```yum remove nodejs```

## 删除yum源
cd 到yum源配置文件夹：```cd /etc/yum.repo.d``` ，删除以 node 开头的源; 清除 yum 缓存 yum clean all

## 安装node
```curl -sL https://rpm.nodesource.com/setup_10.x | bash -```

```yum install -y nodejs```

## 更新 npm
```npm install npm@latest -g``` 命令：npm -v 输出版本号就成功安装了。

## 有问题加入我们官方群
* [加入我们的QQ群](https://shang.qq.com/wpa/qunwpa?idkey=e4098dabb3b751808044bdf58900ad733b983d7efbb5142c5485ececacf3c00d)
