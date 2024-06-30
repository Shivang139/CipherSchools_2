const addNumbers = (...args) => {
    let sum=0;
    args.forEach((arg) => (sum += arg));
    return sum;
};


console.log(addNumbers(4,6,2,8,5));