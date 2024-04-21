// const arr = [1,2,3,2,5,6,1,2,8,5,9]

const duplicate =(arr)=>{
    let obj = {}
    for(let i=0 ; i<arr.length ; i++){
        if(obj.hasOwnProperty(arr[i]) == true){
            obj[arr[i]]++; 
        }
        else{
            obj[arr[i]] = 1;
        }
    }
    for(let l in obj){
        if(obj[l] === 1){
            delete obj[l]
        }
    }
    
    return obj;   
}

console.log(duplicate([1,2,3,2,5,6,1,2,8,5,9]));