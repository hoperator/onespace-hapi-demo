
export interface IRequestHandler<TIn, TOut> {
  (request: TIn, response: any): Promise<TOut>; // - TODO: determine types...
}
