import { Elf } from './elf';

describe('Elf', () => {
  it('should create an instance', () => {
    expect(new Elf()).toBeTruthy();
  });
});

describe('Elf', () => {
  it('should create multiples instances with correc names', () => {
    const elf1: Elf = new Elf();
    const elf2: Elf = new Elf();
    expect(elf1.name).toEqual("Elf_01");
    expect(elf2.name).toEqual("Elf_02");
  });
});
