const object = {
    bWin: funBWin,
    bWin2: (a, b) => (a - b),
    "neshtoSi": FunNeshtoSi,

}

function funBWin(a, b) {
    console.log(a + b);
}

function FunNeshtoSi(a, b) {
    console.log(`${a}${b}`);
}

object.neshtoSi(2, 4);
object['bWin'](2, 4);
console.log(object.bWin2(2, 4));
