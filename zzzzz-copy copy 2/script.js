// let A = [1, 34, 55, 67, 88]; //5el  middle = 3

// function bsearch(a, search) {
//     let left = 0;
//     let right = (a.length) - 1 //5

//     while (left <= right) { 

//         let middle = Math.floor((left + right) / 2) + 1 //3/1/2
//         let currentNumber = a[middle - 1]

//         if (currentNumber === search) { 
//             return currentNumber

//         } else  if (currentNumber > search) {
//             right = middle - 2 //1
//         }
//         else {
//             left = middle; //1
//         }

//         if (left > right) { //1 < 4
//             return -1;
//         }
//     }
// }

// console.log(bsearch([1, 34, 55, 67, 88, 100, 200, 300, 400], 299));



// let A = [
//     [1, 2, 3, 4],
//     [1, 2, 3, 4]
// ];
// let B = [
//     [2, 0],
//     [0, 2],
//     [0, 0],
//     [0, 0]
// ];
// let C = [
//     [0, 0],
//     [0, 0]
// ];

// for (let k = 0; k < 2; k++) {
//     for (let j = 0; j < 2; j++) {
//         for (let i = 0; i < 4; i++) {
//             console.log("A =>", A[j][i], "B=>", B[i][j]);
//             C[k][j] += A[j][i] * B[i][j]
//         }
//     }
// }
// console.log(C);


// let A = [10, 8, 7, 4, 6]

// function qSort(a, b) {

//     let etalon = A[(b + a) / 2] //10+8/2 = 9
//     let j = a;
//     let k = b;

//     while (A[j] < etalon) { //10<9
//         j++;
//         while (A[k] > etalon) {
//             k--

//             if (j <= k) {
//                 let buf = A[k];
//                 A[k] = A[j];
//                 A[j] = buf;
//                 j++;
//                 k--
//             }
//             while (j <= k) {
//                 qSort(a, k);
//                 qSort(j, b);
//             }
//         }
//     }

// }

// qSort()


function countInversions(arr) {
    let temp = new Array(arr.length);
    return mergeSortAndCount(arr, temp, 0, arr.length - 1);
}

function mergeSortAndCount(arr, temp, left, right) {
    let invCount = 0;
    if (left < right) {
        let mid = Math.floor((left + right) / 2);

        invCount += mergeSortAndCount(arr, temp, left, mid); // Инверсии в лявата половина
        invCount += mergeSortAndCount(arr, temp, mid + 1, right); // Инверсии в дясната половина
        invCount += mergeAndCount(arr, temp, left, mid, right); // Инверсии между двата подмасива
    }
    return invCount;
}

// function mergeAndCount(arr, temp, left, mid, right) {
//     // Копиране на част от масива във временния масив
//     for (let i = left; i <= right; i++) {
//         temp[i] = arr[i];
//     }

//     let i = left; // Индекс за начало на лявия подмасив
//     let j = mid + 1; // Индекс за начало на десния подмасив
//     let k = left; // Индекс за масива arr
//     let invCount = 0;

//     while (i <= mid && j <= right) {
//         if (temp[i] <= temp[j]) {
//             arr[k++] = temp[i++];
//         } else {
//             arr[k++] = temp[j++];
//             invCount += (mid - i + 1); // Преброяване на инверсии
//         }
//     }

//     // Копиране на останалите елементи от лявия подмасив (ако има такива)
//     while (i <= mid) {
//         arr[k++] = temp[i++];
//     }

//     // Не е нужно копиране на останалите елементи от десния подмасив, защото те вече са на правилните позиции

//     return invCount;
// }

// // Пример за използване:
// let arr = [0, 2, 5, 9, 7, 1, 6, 3, 8, 4];
// let result = countInversions(arr);
// console.log("Брой на инверсиите:", result);

// function countInversions(arr) {
//     let temp = new Array(arr.length);
//     let invCount = mergeSortAndCount(arr, temp, 0, arr.length - 1);
//     console.log("Брой на инверсиите:", invCount);
//     console.log("Сортираният масив:", arr);
// }

// function mergeSortAndCount(arr, temp, left, right) {
//     let invCount = 0;
//     if (left < right) {
//         let mid = Math.floor((left + right) / 2);

//         invCount += mergeSortAndCount(arr, temp, left, mid); // Инверсии в лявата половина
//         invCount += mergeSortAndCount(arr, temp, mid + 1, right); // Инверсии в дясната половина
//         invCount += mergeAndCount(arr, temp, left, mid, right); // Инверсии между двата подмасива
//     }
//     return invCount;
// }

// function mergeAndCount(arr, temp, left, mid, right) {
//     // Копиране на част от масива във временния масив
//     for (let i = left; i <= right; i++) {
//         temp[i] = arr[i];
//     }

//     let i = left; // Индекс за начало на лявия подмасив
//     let j = mid + 1; // Индекс за начало на десния подмасив
//     let k = left; // Индекс за масива arr
//     let invCount = 0;

//     while (i <= mid && j <= right) {
//         if (temp[i] <= temp[j]) {
//             arr[k++] = temp[i++];
//         } else {
//             arr[k++] = temp[j++];
//             invCount += (mid - i + 1); // Преброяване на инверсии
//         }
//     }

//     // Копиране на останалите елементи от лявия подмасив (ако има такива)
//     while (i <= mid) {
//         arr[k++] = temp[i++];
//     }

//     // Не е нужно копиране на останалите елементи от десния подмасив, защото те вече са на правилните позиции

//     return invCount;
// }

// // Пример за използване:
// let arr = [0, 2, 5, 9, 7, 1, 6, 3, 8, 4];
// countInversions(arr);

// function countInversions(arr) {
//     let temp = new Array(arr.length);
//     let invCount = mergeSortAndCount(arr, temp, 0, arr.length - 1);
//     console.log("Брой на инверсиите:", invCount);
//     console.log("Сортираният масив в намаляващ ред:", arr);
// }

// function mergeSortAndCount(arr, temp, left, right) {
//     let invCount = 0;
//     if (left < right) {
//         let mid = Math.floor((left + right) / 2);

//         invCount += mergeSortAndCount(arr, temp, left, mid); // Инверсии в лявата половина
//         invCount += mergeSortAndCount(arr, temp, mid + 1, right); // Инверсии в дясната половина
//         invCount += mergeAndCount(arr, temp, left, mid, right); // Инверсии между двата подмасива
//     }
//     return invCount;
// }

// function mergeAndCount(arr, temp, left, mid, right) {
//     // Копиране на част от масива във временния масив
//     for (let i = left; i <= right; i++) {
//         temp[i] = arr[i];
//     }

//     let i = left; // Индекс за начало на лявия подмасив
//     let j = mid + 1; // Индекс за начало на десния подмасив
//     let k = left; // Индекс за масива arr
//     let invCount = 0;

//     while (i <= mid && j <= right) {
//         if (temp[i] >= temp[j]) { // Променено условие за сортиране в намаляващ ред
//             arr[k++] = temp[i++];
//         } else {
//             arr[k++] = temp[j++];
//             invCount += (mid - i + 1); // Преброяване на инверсии
//         }
//     }

//     // Копиране на останалите елементи от лявия подмасив (ако има такива)
//     while (i <= mid) {
//         arr[k++] = temp[i++];
//     }

//     // Не е нужно копиране на останалите елементи от десния подмасив, защото те вече са на правилните позиции

//     return invCount;
// }

// // Пример за използване:
// let arr = [0, 2, 5, 9, 7, 1, 6, 3, 8, 4];
// countInversions(arr);


// let array = [0, 2, 5, 9, 7, 1, 6, 3, 8, 4];
// let count = 0;

// for (let i = 0; i < array.length - 1; i++) {
//  for (let j = 0; j < array.length; j++) {
//     if (array[i] > array[i + 1]) {

//     }
//  }
    
// }


