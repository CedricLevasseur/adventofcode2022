import { Elf } from "./elf";

export class Parser {

    static parse(data: string): Elf[] {
        let elves: Elf[] = [];
        let lines: string[] = data.split('\n');
        let currentElf = new Elf();
        lines.forEach((line) => {
            if (line == '') {
                elves.push(currentElf);
                currentElf = new Elf();
            }
            currentElf.produceFood(line);

        });
        elves.push(currentElf);
        return elves;
    }
}
