/********************************************************************
 * Purpose - To to sort the array and then find the 2nd largest 
 *           and the 2nd smallest element.
 * 
 * @version 1.0
 * @author Piyush
 * @since 12-07-2021
 *******************************************************************/

let random = new Array();
let secondMax=1;
let secondMin=1;
let max = 1 ;
//read 10 Random 3 digit number in Array
for(let i = 0;i < 10; i++){
    random[i] = Math.floor(Math.random() * 999 - 100) + 100;
  }

console.log("Random Numbers: "+random);

let sortedArray = random.sort(function(a,b){
                    return a - b;});
console.log("Sorted Array: "+sortedArray); // sorted array

  //find second Maximum number
for(let j = 0; j < random.length; j++){
    if(random[j] > max){
        secondMax = max;
        max = random[j]
    }
    if(random[j] > secondMax && random[j] < max)
        secondMax = random[j];
}

//Find Second minimum number
let min = max;
for(let i = 0;i < random.length; i++){
    if(random[i] < min){
        secondMin = min;
        min = random[i];
    }
    if(random[i] < secondMin && random[i] > min)
        secondMin = random[i]
}


console.log("Maximum Number: "+max);
console.log("Minimum number: "+min);
console.log("Second maximum: " +secondMax);
console.log("second Minimum :"+secondMin );