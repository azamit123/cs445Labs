"use strict"

const fibonacci = (function(){
    const cache = {};
    let value;
    function fib(n){
       if(cache[n]){
          value = cache[n];   
       }else {
       if(n <= 1){
           value = n;
       }else{
           value = fib(n-1) + fib(n-2); 
       }
       cache[n] = value  
    }   
    return value;
    }

    return fib;
})();


function fibonacci2(n) {
    if (n <= 1) {
        return n;
    }
    return fibonacci2(n - 1) + fibonacci2(n - 2);
}




console.time("mine");
console.log(fibonacci(30));
console.timeEnd("mine");

console.time("tina");
console.log(fibonacci2(30));
console.timeEnd("tina");


