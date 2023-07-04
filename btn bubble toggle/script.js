function factorial(params) {
    if (params == 1) {
    return 1
    }
    
    return (params * factorial(params - 1));
};

console.log(factorial(5));
