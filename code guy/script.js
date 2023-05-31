function calcutor(taxRate) {
    return function (price) {
        return (price + (price * taxRate /100))
    }
};

const dicounter = calcutor(20)
const total = Number(dicounter(1)).toFixed(2)

console.log(`${total} лв.`)