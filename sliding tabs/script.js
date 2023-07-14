function solve(arr, k) {
    let first = arr.shift()
    console.log(first);
    let isThere = arr.some((x) => x == k);
    console.log(isThere);
}

solve([1,2,3,4,5, 6], 2)