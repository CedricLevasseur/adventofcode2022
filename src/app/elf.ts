export class Elf {
    name!: string;
    food: number[] = [];
    static order: number = 0;

    constructor() {
        this.name = "Elf_" + ((Elf.order < 10) ? "0" : "") + Elf.order;
        Elf.order++;
    }
}
