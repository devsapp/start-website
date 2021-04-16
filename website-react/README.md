**阿里云 Website 静态网站组件** ⎯⎯⎯ 通过使用 [Serverless-Devs](https://github.com/devsapp)，基于云上 Serverless 服务（如对象存储等），实现“0”配置，便捷开发，极速部署你的静态网站，Website 静态网站组件支持丰富的配置扩展，如自定义域名和 CDN 加速等。提供了目前最易用、低成本并且弹性伸缩的静态站点开发和托管能力。
<br/>

特性介绍：

- [x] **按需付费** - 按照请求的使用量进行收费，没有请求时无需付费
- [x] **"0"配置** - 只需要关心项目代码，之后部署即可，Serverless-Devs 会搞定所有配置。
- [x] **极速部署** - 仅需几秒，部署你的静态网站。
- [x] **CDN 加速，SSL 证书配置和自定义域名** - 支持配置 CDN 加速，支持自定义域名及 HTTPS 访问

<br/>

快速开始：

1. [**安装**](#1-安装)
2. [**创建**](#2-创建)
3. [**部署**](#3-部署)
4. [**配置**](#4-配置)
5. [**账号配置(可选)**](<#账号配置(可选)>)

&nbsp;

### 1. 安装

通过 npm 安装最新版本的 Serverless Devs

```
$ npm install @serverless-devs/s -g
```

### 2. 创建 (TODO)

通过如下命令，快速创建一个静态网站托管应用

```bash
$ s init website-starter --name example
$ cd example
```

下载完毕后，目录结构如下所示：

```
|- src
|   └── index.html
└──  serverless.yml
```

在 `src` 目录中既可以托管简单的 html 文件，也可以托管完整的 React/Vue 的应用。

### 3. 部署

在 `s.yml` 文件下的目录中运行如下命令进行静态网站的部署。部署完毕后，你可以在命令行的输出中查看到你静态网站的 URL 地址，点击地址即可访问网站托管的链接。

```
$ s deploy
```

如果希望查看更多部署过程的信息，可以通过`s deploy --debug` 命令查看部署过程中的实时日志信息

<br/>

### 4. 配置

静态网站组件支持 0 配置部署，也就是可以直接通过配置文件中的默认值进行部署。但你依然可以修改更多可选配置来进一步开发该静态网站项目。

以下是静态网站 Website 组件的 `s.yml`部分配置说明：

```yml
# serverless.yml

component: website # (必填) 引用 component 的名称，当前用到的是 website 组件
name: websitedemo # (必填) 该 website 组件创建的实例名称

edition: 1.0.0
services:
  website:
    component: website # (必填) 引用 component 的名称
    access: default
    props:
      bucket: my-bucket
      src:
        src: './src'
        dist: './build'
        hook: npm run build
        index: index.html
        error: index.html
      region: cn-hangzhou
```

点此查看[全量配置及配置说明](https://github.com/devsapp/website/blob/master/docs/config.md)

当你根据该配置文件更新配置字段后，再次运行 `s deploy`



## 账号配置
通过serverless Devs工具添加密钥信息
```
$ s config add
```
注意：本组件只支持阿里云，需要选择阿里云密钥信息


## 使用文档

[全量配置](./docs/config.md)

[高级配置](./docs/advance.md)
