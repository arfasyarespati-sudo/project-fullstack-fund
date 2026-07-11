class bankAccount{
    #balance = 0;

    constructor(name, place, age){
        this.name = name;
        this.place = place;
        this.age = age;
    }

    getBalance(){
        return this.#balance;
    }

    deposit(nominal){
        this.#balance += nominal;
    }
}

const account = new bankAccount("arfasya", "jakarta", 19);
account.deposit(1000);

console.log(`Welcome ${account.name}!!

your birthplace is in ${account.place},
your age is ${account.age}
your balance is ${account.getBalance()}`);