function triLignes(array) {
    let result = [];
    let count = 0;

    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array[i].length; j++) {
           if (array[i][j] >= 1) {
              count += array[i][j];
           }
        } 
    }
    return count;
}

console.log(triLignes([ 
  [0, 0, 1, 1], 
  [0, 0, 0, 1], 
  [1, 1, 1, 1], 
  [0, 0, 0, 0] 
]));
