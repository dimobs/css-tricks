matrix =
    [
    [1,2,3,4],
    [1,2,3,4],
    [1,2,3,4],
    [1,2,3,4]
    ]

k = 2
buf = 0

for(let i = 0; i <4; i++){
buf = matrix[i][i]
matrix[i][i] = matrix[i][k]
matrix[k][i] = buf
console.log(matrix[k][i]);
}

console.log(matrix);
