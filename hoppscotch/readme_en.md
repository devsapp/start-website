# Vuepress case

<toc>

<p align="center"><b> <a href="./readme.md"> 中文 </a> | English </b></p>

- [Quick start](#Quick-start)
    - [Deploy via command line tool](#Deploy-via-command-line-tools)
- [Application details](#Application-details)
- [About Us](#About-Us)

</toc>

# Quick start

- [:octocat: source](https://github.com/devsapp/start-website/tree/master/website/vuepress/src)
- [:earth_africa: Effect Preview](
http://vuepress.website.1767215449378635.cn-hangzhou.fc.devsapp.net)

## Deploy via command line tools

> Before starting, you need to install the Serverless Devs developer tools: `npm install @serverless-devs/s -g`, for more installation methods, please refer to [Serverless Devs Installation Documentation](https://www.serverless-devs.com/serverless-devs/install) , you also need to configure key information for Alibaba Cloud. For the method of configuring key information, please refer to [Alibaba Cloud Key Configuration Document](https://www.serverless-devs.com/fc/config)
- Initialize the project: `s init website-vuepress -d website-vuepress`
    > It involves determining the selection of the key, the determination of the service name, the determination of the function name, and the determination of the container image
- Enter the project: `cd website-vuepress`
- Deploy the project: `s deploy -y`
- Invoke： According to the returned `url` information, you can make a request in the browser

# Application details

This project is to deploy the very popular documentation site framework `vuepress` to Aliyun Serverless platform (Function Compute FC).

&gt; vuepress will help you ship a beautiful documentation site in no time, just focus on your content and just write Markdown files.

By Serverless Devs developer tools, you only need a few steps to experience the technical bonus of reducing costs and improving efficiency brought by Serverless architecture.

 After the deployment is completed, you can see the case address returned to you by the system, for example:

![Picture alt](https://img.alicdn.com/imgextra/i2/O1CN018j1sOC1jHa9aqbG3F_!!6000000004523-2-tps-1398-690.png)

At this time, open the case address and you can see the application details of the test:

![Picture alt](https://img.alicdn.com/imgextra/i4/O1CN01vy6HCS25JnbsgNHQl_!!6000000007506-2-tps-2528-1328.png)


# About Us
- Serverless Devs Tools:
    - Repository: [https://www.github.com/serverless-devs/serverless-devs](https://www.github.com/serverless-devs/serverless-devs)
      > Welcome to add a :star2:
    - Official website: [https://www.serverless-devs.com/](https://www.serverless-devs.com/)
- Alibaba Cloud Function Compute components:
    - Repository: [https://github.com/devsapp/fc](https://github.com/devsapp/fc)
    - Help document: [https://www.serverless-devs.com/fc/readme](https://www.serverless-devs.com/fc/readme)
- Dingding communication group: 33947367