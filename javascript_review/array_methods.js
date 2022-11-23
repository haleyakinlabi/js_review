const myArr = [
    "This",
    "That",
    "Other"
  ]
  
  // const trial = { ...objArr[0] }
  // console.log("Trial", trial)
  
  // const myObj = {
  //   name: "Brady",
  //   position: "Tech Lead",
  //   age: 26,
  // }
  
  // const myFunc = () => {
  //   console.log("Arrow Func")
  // }
  
  // function myFunc() {
  //   console.log("myFunc")
  // }
  // myFunc()
  // const newArr = [...myArr, "This is new"]
  // const newObj = { ...myObj, name: "Danny" }
  // console.log("Array:", myArr)
  // console.log("New Array:", newArr)
  // console.log("Object:", myObj)
  // console.log("New Object:", newObj)
  
  const objArr = [
    {
      name: "Brady",
      position: "Tech Lead",
      age: 26,
    },
    {
      name: "Kellon",
      position: "Student",
      age: 29,
    },
    {
      name: "Macey",
      position: "Student",
      age: 20,
    },
    {
      name: "Josh",
      position: "Student",
      age: 17,
    }
  ]
  
  let test = objArr
    .filter((person, index) => {
      return person.position !== "Tech Lead"
    })
    .map((person, index) => {
      return `${person.name} is ${person.age} and is a ${person.position}`
    })
  
  console.log(test)