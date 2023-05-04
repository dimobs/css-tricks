for (var i = 0; i < 5; i++) {
deley(i)
}

function deley(i) {
    setTimeout(() => {
        console.log(i);
    }, 1000)
}