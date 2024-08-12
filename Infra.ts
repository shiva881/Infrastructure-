#!/usr/bin/env node

import * as cdk from 'aws-cdk-lib';

// Import your stack classes
import { AthenaStack } from '../lib/athena-stack';
import { GlueStack } from '../lib/glue-stack';
import { LambdaStack } from '../lib/lambda-stack';
import { SageMakerStack } from '../lib/sagemaker-stack';

// Create a new CDK application
const app = new cdk.App();

// Instantiate each stack
new AthenaStack(app, 'AthenaStack', {
  /* Uncomment and specify the environment if needed
   * env: { account: '123456789012', region: 'us-east-1' },
   */
});

new GlueStack(app, 'GlueStack', {
  /* Uncomment and specify the environment if needed
   * env: { account: '123456789012', region: 'us-east-1' },
   */
});

new LambdaStack(app, 'LambdaStack', {
  /* Uncomment and specify the environment if needed
   * env: { account: '123456789012', region: 'us-east-1' },
   */
});

new SageMakerStack(app, 'SageMakerStack', {
  /* Uncomment and specify the environment if needed
   * env: { account: '123456789012', region: 'us-east-1' },
   */
});
