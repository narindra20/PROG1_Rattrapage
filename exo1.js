function NegatifPoistif(array) {
    let result = [];

    for (let i = 0; i < array.length; i++) {
       if (array[i] < 0 || array[i] === 0) {
          result.push(array[i]);
       }else{
        result.push(array[i]);
       }   
    }
    return result;
}

console.log(NegatifPoistif([3, -1, 0, 4, -2, 5, -3]));
