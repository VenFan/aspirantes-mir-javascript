function join(arr){
    let union = arr[0] ;
    for (let i = 1; i < arr.length; i ++){
        union += ' ' + arr[i];
    }
    return union;
}

console.log(join(["mi", "mama", "me", "mima"]));