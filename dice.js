/********************************************************************
 * Purpose - To store the dice number which reched maximum time in dictonary
 * 
 * @version 1.0
 * @author Piyush
 * @since 12-07-2021
 *******************************************************************/

let diceMap = new Map();

diceMap.set(1, 0);
diceMap.set(2, 0);
diceMap.set(3, 0);
diceMap.set(4, 0);
diceMap.set(5, 0);
diceMap.set(6, 0);

while (Array.from(diceMap.values()).includes(10) != true) {
    let dieroll = Math.floor(Math.random() * 6) + 1;
    let value = diceMap.get(dieroll);
    diceMap.set(dieroll, value + 1);
}

console.log(diceMap);
let minRollValue = Math.min(...diceMap.values());

for (let [key, value] of diceMap) {
    if (value == 10) {
        console.log("Maximum rolled Die number :" + key);
    }
    if (value == minRollValue) {
        console.log("Minimum rolled Die number :" + key);
    }
}