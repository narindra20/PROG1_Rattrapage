function nombreUn(array) {
    let count = 0;

    for (let i = 0; i < array.length; i++) {
        if (array[i] >= 1) {
            count++;
        }  
    }
    return count;
}

console.log(nombreUn([0, 0, 0, 0, 1, 1]));
