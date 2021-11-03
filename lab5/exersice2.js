"use strict"


Array.prototype.removeDuplicatesAsync = function(){
    let dupArr = this;
    let filteredArr = [];
    new Promise(function(resolve,reject){

        for(let i=0;i<dupArr.length;i++){
        if(!filteredArr.includes(dupArr[i])){
           filteredArr.push(dupArr[i]);
           resolve(filteredArr);
        }
    }   
}).then(console.log)
  
}

console.log(`start`);
[4, 1, 5, 7, 2, 3, 1, 4, 6, 5, 2].removeDuplicatesAsync(); 
console.log(`end`);
