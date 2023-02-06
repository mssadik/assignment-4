function mindGame(number){
    let goon = number * 3;
    let jog = goon + 10;
    let vaag = jog / 2;
    let biyog = vaag - 5;
    return biyog;
}

let input = mindGame(20);
console.log(input);