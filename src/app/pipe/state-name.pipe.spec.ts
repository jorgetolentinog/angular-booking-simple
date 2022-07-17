import { StateNamePipe } from './state-name.pipe';

describe('StatePipe', () => {
  it('create an instance', () => {
    const pipe = new StateNamePipe();
    expect(pipe).toBeTruthy();
  });
});
