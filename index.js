const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Code your solution here


// console.log(batteryBatches.reduce((totalBatteries, element) => 
//      element + totalBatteries
//  , 0))

let totalBatteries = batteryBatches.reduce((partialResult, element) => partialResult + element,0)


// function accum(array){
//     let totalBatteries = 0;
//     return array.reduce(n => n + totalBatteries)
// }
