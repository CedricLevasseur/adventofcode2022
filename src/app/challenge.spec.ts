import { Challenge } from './challenge';

describe('Challenge', () => {

  beforeEach(() => {
    Challenge.order = 1;
  });
  it('should create an instance', () => {
    expect(new Challenge()).toBeTruthy();
  });

  it('should create two instance', () => {
    let c1 = new Challenge();
    let c2 = new Challenge();
    expect(c1.id).toEqual(1);
    expect(c2.id).toEqual(2);
  });
});
