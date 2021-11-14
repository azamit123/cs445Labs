"use strict"
class Subject{

constructor(){
    this.listeners ={};
}
    
    on(event,fn){
        for(let evnt in this.listeners){
            if(evnt === event){
               this.listeners[evnt].push(fn);
               return;
            }
        }
        this.listeners[event] = [fn];
    }
    
    emit(event,message){
         this.listeners[event].forEach(fn => {
             fn(message);
         });
    }
}


const subject = new Subject();
subject.on('eat', console.log); // register an observer
subject.on('study', console.log); // register an observer

function foo(msg) {
    console.log('foo: ' + msg);
}
subject.on('eat', foo);
subject.on('study', foo);

subject.emit('eat', 'Corn');
//output for Line above: subject.emit('eat', 'Corn');
// Corn
// foo: Corn
subject.emit('study', 'cs445');
//output for Line above: subject.emit('study', 'cs445');
// cs445
// foo: cs445