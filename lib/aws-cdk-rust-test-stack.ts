import cdk = require('@aws-cdk/core');
import lambda = require('@aws-cdk/aws-lambda');
import { Duration } from '@aws-cdk/core';

export class AwsCdkRustTestStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);
    new lambda.Function(this, 'RustLambda', {
      code: lambda.Code.fromAsset('./lambda.zip'),
      handler: 'RustLambda',
      runtime: lambda.Runtime.PROVIDED,
      memorySize: 3008,
      timeout: Duration.seconds(20),
    });
  }
}
