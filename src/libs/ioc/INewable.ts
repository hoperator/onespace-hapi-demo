export interface INewable<T> {
	//new() : T
	new (...args: any[]): T;
	name : string;
}
