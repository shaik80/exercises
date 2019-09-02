// ES6
class Alien{
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
    getName(){
        return this.name;
    }
    getage(){
        return this.age;
    }
 }
 class Human{
    constructor(){
        let alien = new Alien("name",30);
        console.log(alien)
    }
 }
 const human = new Human();
 