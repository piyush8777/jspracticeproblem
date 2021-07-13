/********************************************************************
 * Purpose - To a factorial of a number taken as input.
 * 
 * @version 1.0
 * @author Piyush
 * @since 12-07-2021
 *******************************************************************/

let num = Math.ceil(Math.random()*10); 
console.log("Number = "+num);
let factorial=1;
for(let i=1;i<=num;i++){
    factorial = factorial*i;
}
console.log("Factorial: "+factorial);