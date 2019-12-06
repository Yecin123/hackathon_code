const TIME = 2000;
const awaithrottle = (value = TIME)=> {
    return new Promise(resolve=> {
        setTimeout(()=> {
            resolve();
        },value);
    });
};


module.exports = {
    awaithrottle
};

