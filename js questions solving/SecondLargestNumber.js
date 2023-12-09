// Given an array of size N, print second largest
// distinct element from an array

// input : [12,35,1,10,34,1]  ---------- >>>>>>> Output : 34
// input : [10,5,10]      ------------>>>>>>>>>> Output : 5

secondLargestElement =(arr)=>{
    let largest = Number.NEGATIVE_INFINITY;
    let secondLargest = Number.NEGATIVE_INFINITY;
    for(let i=0 ; i<arr.length ; i++){
        if(arr[i] > largest){
            secondLargest = largest;
            largest = arr[i];
        }
        else if(arr[i] != largest && arr[i] > secondLargest){
            secondLargest = arr[i];
        }
    }

    console.log(secondLargest);
}

secondLargestElement([87,12,77,44]);