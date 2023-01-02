import { Elf } from './elf';

describe('Elf', () => {
  beforeEach(() => {
    Elf.order = 1;
  })

  it('should create an instance', () => {
    expect(new Elf()).toBeTruthy();
  });

  it('should create multiples instances with correct names', () => {
    const elf1: Elf = new Elf();
    const elf2: Elf = new Elf();
    console.log(JSON.stringify(elf1))
    expect(elf1.name).toEqual("Elf_01");
    expect(elf2.name).toEqual("Elf_02");
  });

  it('should store food for an elf', () => {
    const elf1: Elf = new Elf();
    elf1.foods.push(100);
    elf1.foods.push(Number("100"));
    elf1.foods.push(Number("100\n"));
    elf1.produceFood("100");
    expect(elf1.foods).toEqual([100, 100, 100, 100]);
  });

  it(' test summming food produced', () => {
    const elf1 = new Elf();
    elf1.produceFood("100");
    elf1.produceFood("100");
    elf1.produceFood("100");
    expect(elf1.getFoodNumber()).toEqual(300);

  });
});
