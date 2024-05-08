let A = [1, 34, 55, 67, 88]; //5el  middle = 3

function bsearch(a, search) {
    let left = 0;
    let right = (a.length) - 1 //5

    while (left <= right) { 

        let middle = Math.floor((left + right) / 2) + 1 //3/1/2
        let currentNumber = a[middle - 1]

        if (currentNumber === search) { 
            return currentNumber

        } else  if (currentNumber > search) {
            right = middle - 2 //1
        }
        else {
            left = middle; //1
        }

        if (left > right) { //1 < 4
            return -1;
        }
    }
}

console.log(bsearch([1, 34, 55, 67, 88, 100, 200, 300, 400], 299));