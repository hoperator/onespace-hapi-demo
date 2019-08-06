import { Container } from 'inversify';
import { DependencyBuilder } from '../../libs/ioc/DependencyBuilder';
import { IAwsClientConfig } from '../../libs/aws/interfaces/IAwsClientConfig';
import { IAwsBucketConfig } from '../../libs/aws/interfaces/IAwsBucketConfig';
import { AwsBucketKeys } from '../../libs/aws/BucketKeys';

export function registerAwsBuckets(container: Container) {

  const { addSingleton, addTransient, addConstant } = new DependencyBuilder(container);

  const awsClientConfig: IAwsClientConfig = {
    credentials: {
      accessKeyId: '<access-key-goes-here>',
      secretAccessKey: '<secret-key-goes-here>',
    },
    region: 'us-east-1',
  };

  const osPimBucketConfig: IAwsBucketConfig = {
    bucketName: 'os-pim-product-data',
    clientConfig: awsClientConfig,
    timeout: 300000,
  };

  const someOtherBucketConfig: IAwsBucketConfig = {
    bucketName: 'some-other-bucket-name',
    clientConfig: awsClientConfig,
    timeout: 300000,
  };

  addConstant<IAwsBucketConfig>(osPimBucketConfig, AwsBucketKeys.OS_PIM_DEPLOYMENT);
  addConstant<IAwsBucketConfig>(someOtherBucketConfig, AwsBucketKeys.SOME_OTHER_BUCKET);
}