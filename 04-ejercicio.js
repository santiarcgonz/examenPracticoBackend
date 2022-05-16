class Person{
    constructor(name, lastName, age){
        this.name = name;
        this.lastName = lastName;
        this.age = age;
    }

    getDetail(){
        return `${this.name} ${this.lastName} de ${this.age} años`;
    }

}

class Employee extends Person{
    constructor(name, lastName, age, typeEmployee){
        super(name, lastName, age);
        this.typeEmployee = typeEmployee;
    }
    getDetail(){
        return `${super.getDetail()} - ${this.typeEmployee == 'C'? 'C pertenece a Empleado de confianza': 'S pertenece a Sindicato'}`;
    }
}

class Payroll extends Employee{
    constructor(name, lastName, age, typeEmployee){
        super(name, lastName, age, typeEmployee)
    }
    paymentForWorkingDays(){
        const daysWorked = Math.round(Math.random()*( 15 - 5)+ 5);
        const payPerDayS = 350;
        const payPerDayC = 500;
        let payment = '';
        if(this.typeEmployee == 'C'){
            payment = (daysWorked*payPerDayC)-((daysWorked*payPerDayC)*0.13);
            console.log(`${super.getDetail()} con un sueldo de $${payment} por ${daysWorked} días trabajados`)
        }else{
            payment = (daysWorked*payPerDayS)-((daysWorked*payPerDayS)*0.10);
            console.log(`${super.getDetail()} con un sueldo de $${payment} por ${daysWorked} días trabajados`)
        }
    }
}

const person1 = new Payroll('Maelo', 'Ruiz', '21', 'C');
person1.paymentForWorkingDays()
const person2 = new Payroll('Pedro', 'Arroyo', '30', 'C');
person2.paymentForWorkingDays()
const person3 = new Payroll('Willy', 'Colon', '50', 'S');
person3.paymentForWorkingDays()
