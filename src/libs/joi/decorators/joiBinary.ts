
interface IJoiBinaryParams {
  required?: boolean;
  maxSize?: number;
}

export function joiBinary(params: IJoiBinaryParams): Function {
  return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    //descriptor.enumerable = value;
  };
}
