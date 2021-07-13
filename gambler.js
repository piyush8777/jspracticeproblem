/********************************************************************
 * Purpose - To check how many bet required gambler to won
 * 
 * @version 1.0
 * @author Piyush
 * @since 12-07-2021
 *******************************************************************/
let IS_WON = 1;
let IS_LOSS = 0;
let count = 0 ;

let gamblerRs = 100;
while(gamblerRs < 200){
    let bet = Math.floor(Math.random() * 2) % 10;
    if(bet == IS_WON)
    {
        gamblerRs = gamblerRs + 1;
        count++;
    }
    else if(bet == IS_LOSS)
    {
        gamblerRs = gamblerRs - 1;
    }    
}

console.log(+count+" bets made to won the gambler");