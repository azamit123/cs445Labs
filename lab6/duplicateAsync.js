"use strict"

Array.prototype.removeDuplicatesAsync = async function(){
    let dupArr = this;   
    function res(){
        let filteredArr = [];
        for(let i=0;i<dupArr.length;i++){
        if(!filteredArr.includes(dupArr[i])){
           filteredArr.push(dupArr[i]);     
        }  
    } 
     return filteredArr;       
    }
    console.log(await res()) 
}

console.log(`start`);
[4, 1, 5, 7, 2, 3, 1, 4, 6, 5, 2].removeDuplicatesAsync(); 
console.log(`end`);

