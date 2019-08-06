
interface IJoiBoolParams {
  required?: boolean;
}

export function joiBool(params: IJoiBoolParams): Function {
  return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    //descriptor.enumerable = value;
  };
}
