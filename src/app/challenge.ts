export class Challenge {

    id: number = 1;
    static order: number = 1;

    constructor() {
        this.id = Challenge.order;
        Challenge.order++;
    }

}
