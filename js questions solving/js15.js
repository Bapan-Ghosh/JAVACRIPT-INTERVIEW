function freq(arr){
    let freq = {};
    arr.forEach((elem) => {
        if(freq.hasOwnProperty(elem)) freq[elem]++;
        else
          freq[elem] = 1;
    });

    let ans = Object.keys(freq).reduce((acc,next)=>{
        return freq[acc] > freq[next] ? acc : next;
    })

    console.log(ans)
}

freq([1,2,3,12,2,3,12,1,2,3,2121]);

