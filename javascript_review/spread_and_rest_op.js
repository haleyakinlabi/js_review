//SPREAD AND REST OPERATORS 
// ...


//Spread:
//Used to split up array elements OR object properties
//Example: 

 const oldArray = []
 const newArray = [...oldArray, 1, 2]

 const oldObject = {}
 const newObject = {
    ...oldObject,
    newProp: 5
 }

//More Detail: 

const numbers = [1, 2, 3]
const newNumbers = [...numbers, 4, 5]

console.log(newNumbers)


const person = {
    name: 'Max'
}
const newPerson = {
    ...person,
    age: 28 
}

console.log(newPerson)

//Rest:
//Used to merge a list of function arguments into an array
//Example:

function sortArgs(...args){
    return args.sort()
}

//More Detail: 

const filter = (...args) => {
    return args.filter(el => el === 1)
}

console.log(filter(1, 2, 3))


