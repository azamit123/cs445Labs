"use strict"

const isPrime = num => new Promise((resolve, reject) => {
    setTimeout(function() {
        for (let i = 2, s = Math.sqrt(num); i <= s; i++)
            if (num % i === 0) reject({ prime: false });
        resolve({ prime: num > 1 });
    }, 500);
});

 async function isPrimeAsync(num){
      
     console.log(await isPrime(num));

}

console.log('start');
isPrimeAsync(7)
console.log('end');