import { examplesHelloWorld } from './examples-hello-world';

describe('examplesHelloWorld', () => {
  it('should work', () => {
    expect(examplesHelloWorld()).toEqual('examples-hello-world');
  });
});
