function max(arr) {
    let maxNum = arr[0];
    let posicion = 0;

    if (arr.length === 0) {
        return undefined;
    }
    for(let i = 1; i < arr.length; i ++){
        if(arr[i] >= maxNum){
            maxNum = arr[i];
            posicion = i;
        }
    }
    return {maxNum,posicion};
}

console.log(max([1, 3, 2])) // 3, 1
console.log(max([10, 9, 8, 7, 6, 5, 4])) // 10, 0
console.log(max([])) // undefined