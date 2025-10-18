class Parent {
    constructor() {
        this.fatherName = 'Curren'
    }
}
class Child extends Parent {
    constructor(name) {
        super()
        this.name = name
    }
    greet(){
        console.log(`Hi, I am ${this.name}. My father name is ${this.fatherName}. My full name is ${this.name + ' '+ this.fatherName}`)
    }
}
const child1 = new Child('Tom')
const child2 = new Child('Sam')
child1.greet()
console.log(child1, child2)