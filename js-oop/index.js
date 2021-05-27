// Factory function
function createCircle(radius) {
    return {
        radius,
        draw: function() {
            console.log('draw factory');
        }
    };
}


const circle = {
    radius: 1,
    location: {
        x: 1,
        y: 1
    },
    draw: function() {
        console.log('draw');
    }
}

//circle.draw();


const circleFactory = createCircle(5);
//circleFactory.draw();


// Constructor
function Circle(radius) {
    this.radius = radius;
    this.draw = function() {
        console.log('draw constructor');
    }
}

const another = new Circle(1);
another.draw();

// Primitives are copiedo by their value
// Objects are copied by reference

let x = {value: 10};
let y = x;
x.value = 20;

let number = 10 ; 

function increase(number) {
    number++;    
}

increase(number);
console.log(number)

let numberObj = { value: 10 };
function increaseObject(obj){
    obj.value++;
}
increaseObject(numberObj)
console.log(numberObj);

another.location = { x: 78};

for ( let key in another) {
    console.log(key); 
}

for ( let key in another) {
    console.log(key, another[key]); 
}