import { IAwsClientConfig } from './IAwsClientConfig';

export interface IAwsBucketConfig {
  bucketName: string;
  timeout: number;
  clientConfig: IAwsClientConfig;
}
