class Account {
    #balance = 0;
    constructor(owner, balance) {
        this.owner = owner;
        this.#balance = balance;
    }
    deposit(amount){
        this.#balance += amount
    }
    withdraw(amount){
        if (amount <= this.#balance) {
            this.#balance -= amount 
        } else {
            console.log('Insufficient Balance')
        }  
    }
    getbalance(){
        return this.#balance
    }
}
const acc = new Account ('Shariar', 1000)
console.log(acc)
acc.deposit(500)
acc.withdraw(500)
console.log(acc.getbalance())