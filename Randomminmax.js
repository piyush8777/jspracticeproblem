let min = 0;
let max = 0;

let random1 = Math.floor(Math.random() * (999 - 100 +1)) + 100 ;
let random2 = Math.floor(Math.random() * (999 - 100 +1)) + 100 ;
let random3 = Math.floor(Math.random() * (999 - 100 +1)) + 100 ;
let random4 = Math.floor(Math.random() * (999 - 100 +1)) + 100 ;
let random5 = Math.floor(Math.random() * (999 - 100 +1)) + 100 ;
console.log("5 Random Number are: " + random1 + "," + random2 + "," + random3 + "," + random4 + "," + random5 );
min = random1;
max = random1;

if(random2 > max)
    max=random2;
else if(random2 < min)
    min = random2;

if(random3 > max)
    max=random3;
else if(random3 < min)
    min = random3;

if(random4 > max)
    max=random4;
else if(random4 < min)
    min = random4;   

if(random5 > max)
    max=random5;
else if(random5 < min)
    min = random5;

console.log("Maximum Number is: " +max);
console.log("Minimum Number is: " +min);