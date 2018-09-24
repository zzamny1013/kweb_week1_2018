function add(a,b){
    return a+b;
}

function sub(a,b){
    return a-b;
}

function mul(a,b){
    return a*b;
}

function div(a,b){
    if(b==0){
        return new Error('zero divider error.');
    }
    return a/b;
}

function per(a,b){
    if(b==0){
        return new Error('zero divider error.');
    }
    return a%b;
}

function getE(){
    return Math.E;
}

module.exports ={
    add: add,
    sub: sub,
    mul: mul,
    div: div,
    per: per,
    getE: getE
}