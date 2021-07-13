/********************************************************************
 * Purpose - To find degF or degC based on their conversion
 * 
 * @version 1.0
 * @author Piyush
 * @since 12-07-2021
 *******************************************************************/
const prompt = require('prompt-sync')();
let number = 0;
console.log("Choose the Conversion option from below ")
console.log("1.Celcius to Farenheit\n2.Fareniet to Cecius");
let select=prompt();

switch(Number(select)){

    case 1:
        number = prompt("Enter Celcius: ");
        celciusToFarenhiet(number);
        break;

     case 2:
         number = prompt("Enter Fareniet: ");
         farenhietToCelcius(number);
         break;
        
    default:
        console.log("Invalid option");

}

function celciusToFarenhiet(number){
    let degC = number;
    if(degC >= 0 && degC <= 100){
        let degF = ((degC) * (9/5)) + 32;
        console.log(degC+" Celcius = " +degF+" Farenhiet");
    }
}

function farenhietToCelcius(number){
    let degF = number;
    if(degF >= 32 && degF <= 212 ){
        let degC = (degF - 32) * (5/9);
        console.log(degF+" Farenhiet = " +degC+" Celcius");
    }
}