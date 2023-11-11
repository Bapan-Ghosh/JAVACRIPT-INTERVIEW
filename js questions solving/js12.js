let arr = ["ok",100,"cool",700,"DADA","WOW","MOMO",200]
let sum =0;

arr.map((elem)=>{
    if(typeof(elem) === 'number'){
        sum += elem;
    }
})

console.log(sum);