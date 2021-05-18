// Case 1
// const age = [21, 22, 5, 1 ,2 ,5];
// const Alpa = ['A', 'B', 'C', 'D', 'E'];
// const [a, , c, ...rest] = age

// // destructuring can combine to array just like a shortcut for array concatenation
// const newArray = [...age, ...Alpa]
// console.log(newArray)


// Case 2
function sumAndMultiply (a, b) {
    return [a+b, a*b]
}

// const newArray = sumAndMultiply(5, 2)
// destructured version
// const [sum, multiply] = sumAndMultiply(5, 2)

// console.log(sum, multiply)


// lets try on object destructuring
// const personOne = {
//     name: 'Mel',
//     age: 25,
//     address: {
//         city: 'Manila',
//         State: 'Metro manila'
//     }
// }

// const personTwo = {
//     name: 'Juvy',
//     age: 25,
//     favoriteFood: 'Adobo',
//     address: {
//         city: 'Pajo',
//         State: 'Caloocan City'
//     }
// }

// on destructuring we can set our own standard variable that fill while it is missing on objects
// const { name: firstName = 'John', age = 20,  favoriteFood = 'Burger'} = personTwo;
// console.log(firstName, age, favoriteFood)

// // we can also destructure object inside an object
// const { address: {city, State} } = personOne
// console.log(city, State)

// we can also combine object thru destructuring
// const personOne = {
//     name: 'Mel',
//     age: 25,
//     address: {
//         city: 'Manila',
//         State: 'Metro manila'
//     }
// }

// const personTwo = {
//     age: 25,
//     favoriteFood: 'Adobo',
// }

// const personThree = {...personOne, ...personTwo}
// console.log(personThree)


// one also cool thing we can do on object destructuring , is the ability to use it inside a function and an argument like shown below

// const personOne = {
//     name: 'Mel',
//     age: 25,
//     address: {
//         city: 'Manila',
//         State: 'Metro manila'
//     }
// }

// function showUser (user) {
//     console.log(`User is ${user.name} age is ${user.age}`)
// } 

// destructured version of user
// function showUser ({ name , age }) {
//     console.log(`User is ${name} age is ${age}`)
// }

// so far this is the most used feature of js in react


// showUser(personOne)


