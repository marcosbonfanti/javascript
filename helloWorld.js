console.log('hello world!');

var a = 2;
let b = 3;
console.log(a + b);

const estaEsConst = "hola";



//Primitive values
let name = "Marcos"
console.log(typeof name)
let age = 5
console.log(typeof age)
let isBoolean = true
console.log(typeof isBoolean)
let varUndefined = undefined
console.log(typeof varUndefined)
let thisIsNull = null
console.log(typeof thisIsNull)

//Dynamic
console.log("Variables dinamicas")
let nameDynamic = "Marcos"
console.log(typeof nameDynamic)
nameDynamic = 56
console.log(typeof nameDynamic)


//Objects  key-value

let person = {
    name: 'Marcos',
    age: '26'
}

person['name'] = "adsfsdf"
person.name = "tyityret"

//Arrays
let selectedColors = ['red','blue']
selectedColors[2] = 1
console.log(typeof selectedColors)
//length