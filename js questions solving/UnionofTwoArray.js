let A = [7, 2, 6, 4, 5];
let B = [1, 6, 4, 9];

const union = ()=>{
    let union = [...new Set([... A,...B])];
    console.log(union);
    console.log(typeof(union));
}

union();