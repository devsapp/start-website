
> 注：当前项目为 Serverless Devs 应用，由于应用中会存在需要初始化才可运行的变量（例如应用部署地区、函数名等等），所以**不推荐**直接 Clone 本仓库到本地进行部署或直接复制 s.yaml 使用，**强烈推荐**通过 `s init ${模版名称}` 的方法或应用中心进行初始化，详情可参考[部署 & 体验](#部署--体验) 。

# website-excalidraw-v3 帮助文档
<p align="center" class="flex justify-center">
    <a href="https://www.serverless-devs.com" class="ml-1">
    <img src="http://editor.devsapp.cn/icon?package=website-excalidraw-v3&type=packageType">
  </a>
  <a href="http://www.devsapp.cn/details.html?name=website-excalidraw-v3" class="ml-1">
    <img src="http://editor.devsapp.cn/icon?package=website-excalidraw-v3&type=packageVersion">
  </a>
  <a href="http://www.devsapp.cn/details.html?name=website-excalidraw-v3" class="ml-1">
    <img src="http://editor.devsapp.cn/icon?package=website-excalidraw-v3&type=packageDownload">
  </a>
</p>

<description>

本案例将 Excalidraw ，这一功能强大、易于使用的绘图工具，快速创建并部署到阿里云函数计算 FC 。

</description>

<codeUrl>



</codeUrl>
<preview>



</preview>


## 前期准备

使用该项目，您需要有开通以下服务并拥有对应权限：

<service>



| 服务/业务 |  权限  | 相关文档 |
| --- |  --- | --- |
| 函数计算 |  AliyunFCFullAccess | [帮助文档](https://help.aliyun.com/product/2508973.html) [计费文档](https://help.aliyun.com/document_detail/2512928.html) |

</service>

<remark>



</remark>

<disclaimers>



</disclaimers>

## 部署 & 体验

<appcenter>
   
- :fire: 通过 [Serverless 应用中心](https://fcnext.console.aliyun.com/applications/create?template=website-excalidraw-v3) ，
  [![Deploy with Severless Devs](https://img.alicdn.com/imgextra/i1/O1CN01w5RFbX1v45s8TIXPz_!!6000000006118-55-tps-95-28.svg)](https://fcnext.console.aliyun.com/applications/create?template=website-excalidraw-v3) 该应用。
   
</appcenter>
<deploy>
    
- 通过 [Serverless Devs Cli](https://www.serverless-devs.com/serverless-devs/install) 进行部署：
  - [安装 Serverless Devs Cli 开发者工具](https://www.serverless-devs.com/serverless-devs/install) ，并进行[授权信息配置](https://docs.serverless-devs.com/fc/config) ；
  - 初始化项目：`s init website-excalidraw-v3 -d website-excalidraw-v3`
  - 进入项目，并进行项目部署：`cd website-excalidraw-v3 && s deploy -y`
   
</deploy>

## 案例介绍

<appdetail id="flushContent">

本案例将 Excalidraw ，这一功能强大、易于使用的绘图工具，快速创建并部署到阿里云函数计算 FC 。

Excalidraw 是一个开源的手绘风格虚拟白板应用，它通过提供一个简单直观的在线界面，让用户能够轻松地创建和共享图表和草图。这个工具独特的地方在于它模拟了手绘效果，使得创建出的图表既有个性又富有表现力。用户可以在没有绘画技巧的情况下，快速绘制出看上去自然而有趣的设计图。

在 GitHub 上，Excalidraw 由于其易用性和有趣的绘图体验，获得了大量的 stars 和社区支持。它被广大设计师、产品经理、教师、学生和软件开发者所喜爱，用于各种场景，如在线会议、教育、软件设计等。

Excalidraw 的功能包括但不限于基本的图形绘制、文本输入、颜色填充、图层管理、拖放元素以及导出图形为图片或SVG等格式。它还提供了协作功能，使得多名用户可以实时同步地在同一画板上工作，这对于远程团队协作是极其有用的。

通过 Serverless 开发平台，您只需要几步，就可以体验 Excalidraw ，并享受 Serverless 架构带来的降本提效的技术红利。

</appdetail>

## 使用流程

<usedetail id="flushContent">

### 查看部署的应用
本项目案例是 excalidraw 部署到阿里云 Serverless 平台（函数计算 FC），部署完成之后，您可以看到系统返回给您的案例地址，例如：

![图片alt](https://img.alicdn.com/imgextra/i1/O1CN01dTugc51z7575bUTWP_!!6000000006666-0-tps-1152-332.jpg)

此时，打开案例地址，就可以进入 excalidraw 默认的首页：

![图片alt](https://img.alicdn.com/imgextra/i4/O1CN01moxj2N1iNFbmXsyaz_!!6000000004400-0-tps-2882-1678.jpg)

### 二次开发
您可以通过页面上的云端开发功能，在线进行二次开发。如您之前是在本地创建项目，也可以在本地的项目目录`website-excalidraw-v3`下，对项目进行二次开发。在完成开发后，您可以通过`s deploy`命令重新部署该项目并进行查看。

</usedetail>

## 注意事项

<matters id="flushContent">
</matters>


<devgroup>


## 开发者社区

您如果有关于错误的反馈或者未来的期待，您可以在 [Serverless Devs repo Issues](https://github.com/serverless-devs/serverless-devs/issues) 中进行反馈和交流。如果您想要加入我们的讨论组或者了解 FC 组件的最新动态，您可以通过以下渠道进行：

<p align="center">  

| <img src="https://serverless-article-picture.oss-cn-hangzhou.aliyuncs.com/1635407298906_20211028074819117230.png" width="130px" > | <img src="https://serverless-article-picture.oss-cn-hangzhou.aliyuncs.com/1635407044136_20211028074404326599.png" width="130px" > | <img src="https://serverless-article-picture.oss-cn-hangzhou.aliyuncs.com/1635407252200_20211028074732517533.png" width="130px" > |
| --------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| <center>微信公众号：`serverless`</center>                                                                                         | <center>微信小助手：`xiaojiangwh`</center>                                                                                        | <center>钉钉交流群：`33947367`</center>                                                                                           |
</p>
</devgroup>
