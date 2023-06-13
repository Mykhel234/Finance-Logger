import { HasFormatter } from "../interfaces/HasFormater";

export class payments implements HasFormatter{
    recipient: string;
    details: string;
    amount: number;
    constructor(a: string, b: string, c: number){
        this.recipient = a;
        this.details = b;
        this.amount = c;
    }

    format() {
        return `${this.recipient} owes $${this.amount} for ${this.details}`
    }
}