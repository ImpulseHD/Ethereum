import { TransactionInterface } from "./transaction";

export default class Block {
    protected previousHash: string;
    protected transactions: TransactionInterface[];
    
    public constructor(previousHash: string) {
        this.previousHash = previousHash;
        this.transactions = [];
    };
};