//Review of Objects
// class Opinion {
//     constructor() {
//         this.type = "An";
//     }

//     method() {
//         this.type = "Validated";
//     }
// }


//Inheritance Example

// "class Note" is an example of an Abstract Class as it is not meant to be used but  needs to be there so the Full Note & HalfNote can inherit from it

class Note {
    constructor(pitch, duration) {
        this.pitch = pitch;
        this.duration = duration;
    }
}


class FullNote extends Note {
    constructor(pitch) {
        super(pitch,1);
    }
}

class HalfNote extends Note {
    constructor(pitch) {
        super(pitch, .5);
    }
}


let aHalfNote = new HalfNote(880);
let aFullNote = new FullNote(720);

//console.log(aFullNote);
console.log(aHalfNote);



//Abstraction Example
class Vector {
    constructor(x,y){
        this.x = x;
        this.y = y;
    }

    magnitude() {
        return Math.sqrt(this.x*this.x + this.y*this.y);
    }
}

let velo = new Vector(10,5);
let speed = velo.magnitude();
console.log(speed);



//Encapsulation Example

class Engine {
    constructor() {
        this.oil = 10;
    }

    setOil(newOilAmount){
        if(newOilAmount >= 0){
            this.oil = newOilAmount
        } else {
            console.error("Cannot set negative oil");
        }
    }
    
    getOil() {
        return this.oil();
    }
}


//Polymorphism Example

class Book {
    constructor(pages) {
        this.pages = pages;
    }

    read() {
        console.log("You just read " + this.pages + "pages!");
    }
}

class Novel extends Book {
    constructor(){
        super (300);
    }
}

class Comic extends Book {
    constructor() {
        super (16);
    }
}  

let books = [];
books [0] = new Comic();
books [1] = new Novel();
books [2] = new Novel();
books [3] = new Novel();
books [4] = new Comic();


// books.forEach((book) => {
//     book.read();
// })

books.forEach(
    function (book){
        book.read();
    }
)


//Association Example

class Dog{
    constructor(name) {
        this.name = name;
    }

    play(ball) {
        ball.catch(this);
    }
}

class Ball {

    constructor(color) {
        this.color = color;
    }
    
    catch(dog) {
        // remember to put a space bar in between the words like this "'space' caught a 'space'"
        console.log(dog.name + ' caught a ' + this.color + ' ball!');
    } 
}

let dog = new Dog("Vido");
let ball = new Ball("red");
let ball2 = new Ball("blue");
dog.play(ball);