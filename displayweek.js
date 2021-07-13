/********************************************************************
 * Purpose - To read a number and display the week day
 * 
 * @version 1.0
 * @author Piyush
 * @since 12-07-2021
 *******************************************************************/


let day = Math.floor(Math.random()*10)%7+1;
console.log(day)
switch(day){
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
    default:
        console.log("Invalid day");
}