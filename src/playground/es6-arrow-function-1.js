function square(x) {
    return x * x;
};

const squareArrow = (x) => {
    return x * x;    
};

const squareArrowOpt = (x) => x * x;

console.log(square(8));
console.log(squareArrow(9));
console.log(squareArrowOpt(10));

// challenge

const getFirstName = (fullName) => {
    return fullName.split(' ')[0];
};

const getFirstNameOpt = (fullName) => fullName.split(' ')[0];

console.log(getFirstName('Mike Andrew'));
console.log(getFirstNameOpt('Mike Andrew'));