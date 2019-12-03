

const fetch = require("node-fetch");
const Bluebird = require('bluebird');

const utils = require("./utils");

fetch.Promise = Bluebird;

var listCounter = 1;


const answerSwitch = {
    "MAX" : max,
    "CALCULUS" : calc,
    "PRIME":prime 
};

const awaithrottle = (value = 3500)=> {
    return new Promise(resolve=> {
        setTimeout(()=> {
            resolve();
        },value);
    });
};





 function getAndAnswer() {

   
        fetch(utils.URL_QUESTIONS, utils.GET)
        .then(data => data.json(),err=>console.log("fetch errr", err))
        .then( async data => {


            var i=1;
            
            for(var el in data) {
                console.log(el);
                if (! answerSwitch[data[el].type]) continue;
                const res = answerSwitch[data[el].type](data[el].hint);
                console.log("waiting");
                await awaithrottle();
                console.log("done, anwsering now");
                await answer(data[el]._id, res);
                i++;
            }
         
         
            listCounter++;


            console.log("List ", listCounter);
            await awaithrottle();

            getAndAnswer();

        });
        
        
    }
 
   
   getAndAnswer();











function calc(hint) {

   // console.log("calc launshed");
    const arr = hint.split(' ');

    const val1 = parseInt(arr[2]);
    const op = arr[3];
    const val2 = parseInt(arr[4]);


    switch (op) {
        case "plus": return val1 + val2;
        case "minus": return val1 - val2;
        case "times": return val1 * val2;
    }

}


function max(hint) {
  //  console.log("max launshed");
    const arr = hint.split(' ');

    const val1 = parseInt(arr[2]);
    const op = arr[3];
    const val2 = parseInt(arr[4]);
  // console.log("res max", val1,val2);
    return val1>val2 ? val1: val2;
}


function prime(hint) {

    const arr = hint.split(' ');
    const value = parseInt(arr[3].split("th")[0]);
  //  console.log("prime number th ?",value);

  return PrimeMover(value);

}

function answer(id, value) {


    return fetch(utils.URL_ANSWER(id, value), utils.GET)
        .then(data => {
            //data.json();
            console.log(data.json());
        },err=>console("answer error", err));
       
}


function answerDelay(id, value) {
    return new Promise(resolve => {


      
            answer(id, value)
            .then(async data=> {
                console.log("answer response ",data);
                await awaithrottle();
                resolve();
            });
        });        
    
}

function Prime(num) {
    output = true  
    for (var i=2 ; i<num ; i++) { //var i=2
        if (num%i === 0)  {
           output = false ; break
        }
    }
    return output
    }
    
    function PrimeMover(num) {
    var count = 0
    for (var i=2 ; i<10000 ; i++)  { //var i=2
        if (Prime(i) === true) {
            count = count + 1 
        }
        if (count === num) {
            return i
            break
        } 
    }
    }


    function attack(id) {
        fetch(utils.URL_ATTACK(id),utils.HEADERS)
        .then(data=> {
            console.log("attacked");
        });
    }
    function burst() {
      
    }
    function reload() {
       
    }

    

    function attack(id) {

    }