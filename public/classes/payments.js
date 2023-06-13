export class payments {
    constructor(a, b, c) {
        this.recipient = a;
        this.details = b;
        this.amount = c;
    }
    format() {
        return `${this.recipient} owes $${this.amount} for ${this.details}`;
    }
}
