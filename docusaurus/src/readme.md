
> 注：当前项目为 Serverless Devs 应用，由于应用中会存在需要初始化才可运行的变量（例如应用部署地区、函数名等等），所以**不推荐**直接 Clone 本仓库到本地进行部署或直接复制 s.yaml 使用，**强烈推荐**通过 `s init ${模版名称}` 的方法或应用中心进行初始化，详情可参考[部署 & 体验](#部署--体验) 。

# website-docusaurus-v3 帮助文档
<p align="center" class="flex justify-center">
    <a href="https://www.serverless-devs.com" class="ml-1">
    <img src="http://editor.devsapp.cn/icon?package=website-docusaurus-v3&type=packageType">
  </a>
  <a href="http://www.devsapp.cn/details.html?name=website-docusaurus-v3" class="ml-1">
    <img src="http://editor.devsapp.cn/icon?package=website-docusaurus-v3&type=packageVersion">
  </a>
  <a href="http://www.devsapp.cn/details.html?name=website-docusaurus-v3" class="ml-1">
    <img src="http://editor.devsapp.cn/icon?package=website-docusaurus-v3&type=packageDownload">
  </a>
</p>

<description>

本案例将 Docusaurus ，这一使用者广泛的网站生成器，快速创建并部署到阿里云函数计算 FC 。

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
   
- :fire: 通过 [Serverless 应用中心](https://fcnext.console.aliyun.com/applications/create?template=website-docusaurus-v3) ，
  [![Deploy with Severless Devs](https://img.alicdn.com/imgextra/i1/O1CN01w5RFbX1v45s8TIXPz_!!6000000006118-55-tps-95-28.svg)](https://fcnext.console.aliyun.com/applications/create?template=website-docusaurus-v3) 该应用。
   
</appcenter>
<deploy>
    
- 通过 [Serverless Devs Cli](https://www.serverless-devs.com/serverless-devs/install) 进行部署：
  - [安装 Serverless Devs Cli 开发者工具](https://www.serverless-devs.com/serverless-devs/install) ，并进行[授权信息配置](https://docs.serverless-devs.com/fc/config) ；
  - 初始化项目：`s init website-docusaurus-v3 -d website-docusaurus-v3`
  - 进入项目，并进行项目部署：`cd website-docusaurus-v3 && s deploy -y`
   
</deploy>

## 案例介绍

<appdetail id="flushContent">

本案例将 Docusaurus ，这一使用者广泛的网站生成器，快速创建并部署到阿里云函数计算 FC 。

Docusaurus 是一个为技术文档和博客推出的现代静态网站生成器。它提供了一种轻量级的方法来创建和托管由 Markdown 驱动的文档网站。Docusaurus 的设计理念是将注意力集中在编写内容上，而非维护复杂的网站架构。它的直观性使得启动和部署项目变得极其简单，而且可以轻松地与版本控制工具（如Git）集成，从而优化文档协作流程。

在 GitHub 上，Docusaurus 因其易用性、扩展性和社区支持而受到了广泛的认可，拥有大量 stars。它被众多知名开源项目采用，如React Native、Jest 和 Redux 等，证明了其在技术文档领域的受欢迎程度和适用性。

Docusaurus 预设了响应式的布局，意味着你的文档网站将会在各种设备上呈现良好的阅读体验。另外，它内置了 Algolia 搜索支持，使得读者能够快速找到关键信息。Docusaurus 的版本控制功能也是一个亮点，它允许开发者轻松管理不同版本的文档，为用户提供多个版本的参考资料。

通过 Serverless 开发平台，您只需要几步，就可以体验 Docusaurus ，并享受 Serverless 架构带来的降本提效的技术红利。

</appdetail>

## 使用流程

<usedetail id="flushContent">

### 查看部署的应用
本项目案例是 docusaurus 部署到阿里云 Serverless 平台（函数计算 FC），部署完成之后，您可以看到系统返回给您的案例地址，例如：

![图片alt](https://img.alicdn.com/imgextra/i1/O1CN010c3YHL1a0nGVe2ZyK_!!6000000003268-0-tps-1196-584.jpg)

此时，打开案例地址，就可以进入 docusaurus 默认的首页：

![图片alt](https://img.alicdn.com/imgextra/i3/O1CN01SAgalQ1fW09cM1X7i_!!6000000004013-2-tps-1263-664.png)

### 二次开发

您可以通过云端控制台的开发功能进行二次开发。如果您之前是在本地创建的项目案例，也可以在本地项目目录`website-docusaurus-v3`文件夹下，对项目进行二次开发。开发完成后，可以通过`s deploy`进行快速部署。

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
