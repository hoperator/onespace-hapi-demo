import { AwsBucketKeys } from './BucketKeys';
import { IAwsBucketConfig } from './interfaces/IAwsBucketConfig';
import { resolveWithKey } from '../ioc/DependencyProvider';

export class AwsBucketUploader {

  private readonly bucketConfig: IAwsBucketConfig;

  constructor(private bucketKey: AwsBucketKeys) {
    this.bucketConfig = resolveWithKey<IAwsBucketConfig>(bucketKey);
  }

  async uploadFile (...params) : Promise<string> {
    // - TODO: implement file-upload logic...
    return 'test-file-name';
  }
}