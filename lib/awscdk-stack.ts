import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as path from "path";
// import * as sqs from 'aws-cdk-lib/aws-sqs';

export class AwscdkStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // 定义 Lambda 函数
    const authLambda = new cdk.aws_lambda.Function(this, "authLambda", {
      runtime: cdk.aws_lambda.Runtime.NODEJS_14_X,
      handler: "auth.handler",
      code: cdk.aws_lambda.Code.fromAsset(path.join(__dirname, "../services/lambda")),
    });
    const memberLambda = new cdk.aws_lambda.Function(this, "memberLambda", {
      runtime: cdk.aws_lambda.Runtime.NODEJS_14_X,
      handler: "member.handler",
      code: cdk.aws_lambda.Code.fromAsset(path.join(__dirname, "../services/lambda")),
    });

    // 定义 API Gateway
    const restApi = new cdk.aws_apigateway.RestApi(this, "restApi");

    // 路径映射资源
    const auth = restApi.root.addResource("auth");
    auth.addMethod("GET", new cdk.aws_apigateway.LambdaIntegration(authLambda));
    const member = restApi.root.addResource("member");
    member.addMethod("GET", new cdk.aws_apigateway.LambdaIntegration(memberLambda));
  }
}
