interface ForwardFunction {
  (req: Request): Request;
}
type BackwordFunction = (res: Response) => Promise<void>;

class Interceptor {
  public forward: ForwardFunction;
  public backward: BackwordFunction;

  constructor(
    forward: ForwardFunction,
    backward?: BackwordFunction,
  ) {
    this.forward = forward;
    this.backward = backward
    || (() => new Promise<void>((resolve) => { resolve(); }));
  }
}

export default Interceptor;
