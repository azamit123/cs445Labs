"use strict"

class Regular {
    constructor(){
        this.years = 1;
        this.lumens = "50-100";
    }

}

class Energy {
    constructor(color){
        this.years = 10;
        this.lumens = "5-40";
        this.color = color;
    }
}

class Factory {

    createBulb(bulb,color){
        if(bulb==="regular"){
            return new Regular();
        }else if(bulb==="energy"){
            return new Energy(color);
        }

    }

}

const bulbs = [];
const factory = new Factory();

bulbs.push(factory.createBulb("regular"));
bulbs.push(factory.createBulb("energy", "red"));


for (let i = 0, len = bulbs.length; i < len; i++) {
    console.log(bulbs[i]);
}