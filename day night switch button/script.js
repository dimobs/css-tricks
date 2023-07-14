function oddNumbers(l, r) {
    // Write your code here
    let result = []
    outprint = ""
    for (step = l; step <= r; step++) {
        if (step % 2 != 0) {
            result.push(step)
        }
    }

    return result.join(' ');
}

console.log(oddNumbers(2, 5))