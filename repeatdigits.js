/********************************************************************
 * Purpose - To find the digits that are repeated twice and store 
 *            them in an array
 * 
 * @version 1.0
 * @author Piyush
 * @since 12-07-2021
 *******************************************************************/

let arr = new Array();
let j=0;

for(let i = 1; i < 100; i++){
    if(i%11 == 0){
        arr[j] = i;
        j++;
    }
}
console.log("Digit that repeated twice are: ")
console.log(arr);