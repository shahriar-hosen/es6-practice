class student {
    constructor(name, old, subject = 'Math') {
        this.name = name;
        this.old = old;
        this.subject = subject;
    }
}
const student1 = new student('Shahin', 23, 'Arabic');
const student2 = new student('Shahriar', 21, 'English');
const student3 = new student('Shakira', 39);
console.log(student1, student2, student3)

class Phone {
    constructor(name, display, camera, price) {
        this.name = name;
        this.display = display;
        this.camera = camera;
        this.price = price;
        this.madeIn = 'India'

    }
}
const phone1 = new Phone('Redmi Note 12', '6.67 inch', '48 MP', '14000 BDT')
const phone2 = new Phone('Narzo 50', '6.55 inch', '64 MP', '16000 BDT')
console.log(phone1.madeIn, phone2.madeIn)