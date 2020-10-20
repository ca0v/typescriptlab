type PromiseFunc = (item: any) => Promise<any>;

interface Array<T> {
  foobar(action: PromiseFunc): Promise<Array<any>>;
}

Array.prototype.foobar = async function (this: Array<any>, asyncAction) {
  return await Promise.all(this.map((element) => asyncAction(element)));
};
