
interface IJoiStringParams {
  required?: boolean;
  minLen?: number;
  maxLen?: number;
}

export function joiString(params: IJoiStringParams): Function {
  return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    //descriptor.enumerable = value;
  };
}
