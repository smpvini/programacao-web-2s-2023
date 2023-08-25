function matrixMultiplication(A, B) {
    const rowsA = A.length;
    const colsA = A[0].length;
    const rowsB = B.length;
    const colsB = B[0].length;

    if (colsA !== rowsB) {
        return "Não é possível calcular a multiplicação das matrizes.";
    }

    const C = new Array(rowsA).fill(0).map(() => new Array(colsB).fill(0));

    for (let i = 0; i < rowsA; i++) {
        for (let j = 0; j < colsB; j++) {
            for (let k = 0; k < colsA; k++) {
                C[i][j] += A[i][k] * B[k][j];
            }
        }
    }

    return C;
}

const matrixA = [
    [1, 3],
    [2, 5]
];

const matrixB = [
    [2, 2],
    [0, 1]
];

const result = matrixMultiplication(matrixA, matrixB);
if (typeof result === "string") {
    console.log(result);
} else {
    result.forEach(row => console.log(row));
}
