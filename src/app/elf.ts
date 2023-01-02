export class Elf {
    id!: number;
    name!: string;
    foods: number[] = [];
    static order: number = 1;

    constructor() {
        this.name = "Elf_" + ((Elf.order < 10) ? "0" : "") + Elf.order;
        this.id = Elf.order;
        Elf.order++;
    }
    produceFood(food: string) {
        this.foods.push(Number(food));
    }
    getFoodNumber(): number {
        let sum: number = 0;
        this.foods.forEach((food) => sum += food);
        return sum;
    }
}
