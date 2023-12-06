let arr = ["ok",100,"cool",700,"DADA","WOW","MOMO",200]
let sum =0;

const s = arr.map((elem)=>{
    if(typeof(elem) === 'number'){
        sum += elem;
    }
})

console.log(s(sum));