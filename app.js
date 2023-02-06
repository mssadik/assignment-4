function mindGame(number){
    if(isNaN(number) === true){
        let massage = "plz input a number";
        return massage;
    }else{
        let goon = number * 3;
        let jog = goon + 10;
        let vaag = jog / 2;
        let biyog = vaag - 5;
        return biyog;
    }
}

let inputNumber = mindGame("10");
console.log(inputNumber);









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

let inputString = evenOdd("2000");
console.log(inputString);
