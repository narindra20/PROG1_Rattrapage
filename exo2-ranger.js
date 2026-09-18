function Ranger(array) {
    let result = [];

    for (let i = 0; i < array.length; i++) {
        
        if (array[i] <= array[i-1]) {
            result.push(array[i]);
        }else{
            result.push(array[i]);
        }
    }
    return result;
}

console.log(Ranger([0, 1, 0, 0, 1, 0]));


