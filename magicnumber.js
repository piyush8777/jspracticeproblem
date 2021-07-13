/********************************************************************
 * Purpose - To print a magic number
 * 
 * @version 1.0
 * @author Piyush
 * @since 12-07-2021
 *******************************************************************/

console.log(num);
let n=50;
let start =0;
let end = 100;
while(n!=num){
    if(n==num)
        console.log("Num is: "+n);
    else if(n>num){
        end = n;
        n=Math.floor((start+end)/2);
    }
    else if(n>num){
        start = n;
        n=Math.floor((start+end)/2);
    }
}