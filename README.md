# Welcome to your CDK TypeScript project

This is a blank project for CDK development with TypeScript.

The `cdk.json` file tells the CDK Toolkit how to execute your app.

## Useful commands

* `npm run build`   compile typescript to js
* `npm run watch`   watch for changes and compile
* `npm run test`    perform the jest unit tests
* `cdk deploy`      deploy this stack to your default AWS account/region
* `cdk diff`        compare deployed stack with current state
* `cdk synth`       emits the synthesized CloudFormation template



```bash
# 建立工程目录
mkdir komapp
cd komapp
# 初始化 cdk 项目工程
cdk init app --language typescript
# cdk init app --language javascript
# cdk init app --language python
# cdk init app --language java
# cdk init app --language csharp
# cdk init app --language go
# 编辑工程堆栈文件
nano lib/komapp-stack.ts
# 编译工程检测语法错误
npm run build
# 列出应用程序中的堆栈
cdk ls
# 检测潜在问题
cdk doctor
# 合成 AWS CloudFormation 模板
cdk synth
# 设置 bootstrap 引导程序, 部署 CDKToolkit 堆栈到 AWS CloudFormation 环境(v2需要)
# -> https://docs.aws.amazon.com/zh_cn/cdk/v2/guide/bootstrapping.html
# cdk bootstrap aws://ACCOUNT-NUMBER/REGION
cdk bootstrap aws://232100206199/eu-west-2
# 部署堆栈
cdk deploy
# 查看堆栈信息
cdk metadata AwscdkStack
# 修改程序，查看更改
cdk diff
# 销毁资源
cdk destroy
```