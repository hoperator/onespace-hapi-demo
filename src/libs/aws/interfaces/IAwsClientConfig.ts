
export interface IAwsClientConfig {
  credentials: IAwsClientCredentials;
  region: string;
}

export interface IAwsClientCredentials {
  accessKeyId: string;
  secretAccessKey: string;
}