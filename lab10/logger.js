"use strict"

class User{
    constructor(name){
        this.name = name;
    }
    
}


class DecoratedUser{
    constructor(user,city,state){
        this.user = user;
        this.city = city;
        this.state = state;
    }

    logger(){
        console.log(` decoratedUser: name: ${this.user.name}, city: ${this.city}, state: ${this.state}`);
    }
}


const user = new User("Kelly");

const decorated = new DecoratedUser(user, "Broadway", "New York");
decorated.logger();