//class

class Human {
    constructor() {
        this.gender = 'male'
    }
    printGender(){
        console.log(this.gender)
    }
}

//Extending Class

class Person extends Human{
    constructor() {
        super()
        this.name = 'Max'
    }
    printMyName(){
        console.log(this.name)
    }
}

const person = new Person()
person.printMyName()
person.printGender()


//output: Max
//male

//Classes, Properties, and Methods
//New way of Writing Classes 

class Human {
    gender =  'male'

    printGender = () => {
        console.log(this.gender)
    }
}

class Person extends Human {
    name = 'Max'
    gender = 'female'

    printMyName =() =>{
        console.log(this.name)
    }
}

const perSon = new Person()
person.printMyName()
person.printGender()

