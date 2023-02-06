//If you put a number in the inputNumber Then it will return you
// With that number * 3, result + 10, result / 2, result - 5   and 
// Finally, it will return you the result of this calculation


// function mindGame(number){
//     if(isNaN(number) === true){
//         const massage = "plz input a number";
//         return massage;
//     }else{
//         let goon = number * 3;
//         let jog = goon + 10;
//         let vaag = jog / 2;
//         let biyog = vaag - 5;
//         return biyog;
//     }
// }

// let inputNumber = mindGame("sdfs");
// console.log(inputNumber);







//If you give a string in the inputString, you can understand whether it is even or odd


// function evenOdd(string){
//     if(isNaN(string) === false){
//         let massage = "plz input a string";
//         return massage;
//     }if(string.length % 2 === 0){
//         let even = "even";
//         return even;
//     }else{
//         let odd = "odd";
//         return odd;
//     }
// }

// let inputString = evenOdd("222");
// console.log(inputString);







//If you give a number in the inputNumberP3 you subtract 7 from that number,
// if the subtraction is less than 7, then it will return the subtraction,
//And if equal to or greater than 7 then double the inputNumberP3 number and return


// function isLGSeven(numbers){
//     let biyog = numbers - 7;
//     if(isNaN(numbers) === true){
//         let massage = "plz input a number";
//         return massage;
//     }else if(biyog < 7){
//         return biyog;
//     }else{
//         let digun = numbers * 2;
//         return digun;
//     }
// }

// let inputNumberP3 = isLGSeven("223");
// console.log(inputNumberP3)





//Returns the length of an array containing negative numbers


// function findingBadData(array){
//     let badData = [];
//     for(let i = 0; i < array.length; i ++){
//         if(array[i] < 0){
//             badData.push(array[i]);
//         }
//     }
//     let badDataLength = badData.length;
//     return badDataLength;
// }

// let manAge = [20, -11, -23, 40, -22, -44, 15];
// let inputArrayP4 = findingBadData(manAge);
// console.log(inputArrayP4);








function gemsToDiamond(friend1gems, friend2gems, friend3gems){
    let friend1gemsGunFol = friend1gems * 21;
    let friend2gemsGunFol = friend2gems * 32;
    let friend3gemsGunFol = friend3gems * 43;
    let allFriendsgemsSum = friend1gemsGunFol + friend2gemsGunFol + friend3gemsGunFol;
    if(allFriendsgemsSum >= 2000){
      let a = allFriendsgemsSum - 2000;
      return a;
    }else{
        return allFriendsgemsSum;
    }
}
let allFriendsgems = gemsToDiamond(20, 5, 13)
console.log(allFriendsgems);