arr = [0,2,5,9,7,1,6,3,8,4]

counter = 0

function sorting(a, b) {
    counter++
    return a - b
}

arr.sort(sorting)


console.log(counter);
console.log(arr);