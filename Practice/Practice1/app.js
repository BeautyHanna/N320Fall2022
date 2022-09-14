// Object Version
// var myDog1 = {
//     name: "Vido",
//     height: 10,
//     color: "brown",
//     bark: function() {
//         console.log(this.name + " barks!");
//         }
// }



// myDog1.bark();

//console.log(myDog1);


// Class Version
// class Dog {
//     constructor(name,height,color){
//         this.name = name;
//         this.height = height; 
//         this.color = color;
//     }

//     bark(){
//         console.log(this.name + " woofs!");
//     }
// }
// var myDog2 = new Dog("Giselle",10,"yellow");

// for (var i = 0; i < 400; i++){
//     var myDog3 = new Dog("Clifford #" + i, 400, "red");
//     myDog3.bark();
// }


// console.log(myDog2);
// myDog2.bark();



class Animal{
    constructor(name,weight,color){
        this.name = name;
        this.weight = weight;
        this.color = color;
    }
}

class Dog extends Animal {
    constructor(name,weight,color){
        super(name,weight,color);
        this.kind = "dog";
    }
    bark(){
        console.log(this.name + " barks!");
    }
}

let aDog = new Dog("Rex", 45, "black");

console.log(aDog);
aDog.bark();