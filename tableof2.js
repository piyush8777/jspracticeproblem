/********************************************************************
 * Purpose - To print a table of the powers of 2 that are less than 
 *             or equal to 2^n till 256
 * 
 * @version 1.0
 * @author Piyush
 * @since 12-07-2021
 *******************************************************************/

let n = Math.floor(Math.random()*100); 
console.log("n = "+n);
let count =1;
let power =1;
while(power<=256&&count<=n){
    console.log(power);
    power = power*2;
    count++;
}