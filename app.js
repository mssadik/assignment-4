//If you put a number in the inputNumberP1 Then it will return you
// With that number * 3, result + 10, result / 2, result - 5   and 
// Finally, it will return you the result of this calculation


function mindGame(number){
    if(isNaN(number) === true){
        const massage = "plz input a number";
        return massage;
    }else{
        let goon = number * 3;
        let jog = goon + 10;
        let vaag = jog / 2;
        let biyog = vaag - 5;
        return biyog;
    }
}

let inputNumberP1 = mindGame("good");
console.log(inputNumberP1);







//If you give a string in the inputString, you can understand whether it is even or odd


function evenOdd(string){
    if(isNaN(string) === false){
        let massage = "plz input a string";
        return massage;
    }if(string.length % 2 === 0){
        let even = "even";
        return even;
    }else{
        let odd = "odd";
        return odd;
    }
}

let inputStringP2 = evenOdd("go");
console.log(inputStringP2);







//If you give a number in the inputNumberP3 you subtract 7 from that number,
// if the subtraction is less than 7, then it will return the subtraction,
//And if equal to or greater than 7 then double the inputNumberP3 number and return


function isLGSeven(numbers){
    let biyog = numbers - 7;
    if(isNaN(numbers) === true){
        let massage = "plz input a number";
        return massage;
    }else if(biyog < 7){
        return biyog;
    }else{
        let digun = numbers * 2;
        return digun;
    }
}

let inputNumberP3 = isLGSeven(15);
console.log(inputNumberP3)





// Returns the length of an array containing negative numbers


function findingBadData(array){
  let badData = [];
  for(let i = 0; i < array.length; i ++){
    if(array instanceof Array === true ){
      if(array[i] < 0){
        badData.push(array[i]);
      }
    }else{
      return "plz input an array";
    }
  }
  let badDataLength = badData.length;
  return badDataLength;
}

let manAge = [ -4, -9, -5, -33, -55 ];
let inputArrayP4 = findingBadData(manAge);
console.log(inputArrayP4);









// Taking games from every friend will convert them into diamonds


function gemsToDiamond(friend1gems, friend2gems, friend3gems){
    if(isNaN(friend1gems) === false && isNaN(friend2gems) === false && isNaN(friend3gems) === false){
      let friend1gemsGunFol = friend1gems * 21;
      let friend2gemsGunFol = friend2gems * 32;
      let friend3gemsGunFol = friend3gems * 43;
      let allFriendsgemsSum = friend1gemsGunFol + friend2gemsGunFol + friend3gemsGunFol;
  if(allFriendsgemsSum > 2000){
    let biyogFol = allFriendsgemsSum - 2000;
    return biyogFol;
  }else{
      return allFriendsgemsSum;
  }
    }else{
      return "plz input a number";
    }

}
let allFriendsgems = gemsToDiamond( 100, 5, 1);
console.log(allFriendsgems);









