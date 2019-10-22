#!/usr/bin/env node
import 'source-map-support/register';
import cdk = require('@aws-cdk/core');
import { AwsCdkRustTestStack } from '../lib/aws-cdk-rust-test-stack';

const app = new cdk.App();
new AwsCdkRustTestStack(app, 'AwsCdkRustTestStack');
