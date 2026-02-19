function addMatrices(matrix1, matrix2) {
  
  const result = []

  for (let i = 0 ; i < 4 ; i++) {
    
    const row = [] ;

    for (let j = 0 ; j < 4 ; j++) {
      row.push(matrix1[i][j] + matrix2[i][j]);
    }
    result.push(row);
  }

  return result ;

}

matrix1 = [
  [1,2,3,4] ,
  [5,6,7,8] ,
  [9,10,11,12] ,
  [13,14,15,16]
];

matrix2 = [
  [16,15,14,13],
  [12,11,10,9],
  [8,7,6,5],
  [4,3,2,1],
];

console.log(addMatrices(matrix1,matrix2))

module.exports = addMatrices;
