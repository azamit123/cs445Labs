"use strict"

const isPrime = num => new Promise((resolve, reject) => {
    setTimeout(function() {
        for (let i = 2, s = Math.sqrt(num); i <= s; i++)
            if (num % i === 0) reject({ prime: false });
        resolve({ prime: num > 1 });
    }, 500);
});

 async function isPrimeAsync(num){
    try{
         console.log(await isPrime(num));
    } catch(error){
        console.log({prime: false});
    }
    

}

console.log('start');
isPrimeAsync(2)
console.log('end');