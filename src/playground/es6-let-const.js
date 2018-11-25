var nameVar = 'Vittorio';
var nameVar = 'Mike';
console.log('nameVar', nameVar);

let nameLet = 'Vittorio';
nameLet = 'Julie';
console.log('nameLet', nameLet);

const nameConst = 'Frank';
console.log('nameConst', nameConst);

function getThis() {
    console.log(this);
};

const fGet = function() {
    console.log(this);
};

getThis();
fGet();