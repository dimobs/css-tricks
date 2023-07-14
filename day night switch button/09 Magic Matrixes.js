function solve(params) {

    arr = []

    for (let row = 0; row < params.length; row++) {
        sum_row = 0;
        sum_col = 0;
        for (let col = 0; col < params[row].length; col++) {
            sum_row += (params[row][col]);
            sum_col += (params[col][row]);
        }

        if (sum_col == sum_row) {
            arr.push(sum_col, sum_row)

        } else {
            break
        }

    }

    let isTrue = (arr.every((x, i, arr) => x == arr[0]));

    if (isTrue && arr.length > 1) {

        console.log(isTrue)

    } else {

        console.log(!isTrue)
    }

}

solve([
    [4, 5, 6],
    [6, 5, 4],
    [5, 5, 5]
]
)

solve([[11, 32, 45],
    [21, 0, 1],
    [21, 1, 1]]
    )

    solve([[1, 0, 0],
        [0, 0, 1],
        [0, 1, 0]]
        
        )

