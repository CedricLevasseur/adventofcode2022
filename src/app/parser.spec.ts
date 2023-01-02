
import { Elf } from './elf';
import { Parser } from './parser';

describe('Parser', () => {
  it('should create an instance', () => {
    expect(new Parser()).toBeTruthy();
  });

  it('should create an instance', () => {
    let data = `100

200

300`
    let elfves: Elf[] = Parser.parse(data);
    expect(elfves.length).toEqual(3);
    expect(elfves[0].getFoodNumber()).toEqual(100);
    expect(elfves[1].getFoodNumber()).toEqual(200);
    expect(elfves[2].getFoodNumber()).toEqual(300);
  });
});
