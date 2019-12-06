const fetch = require("node-fetch");
const Bluebird = require('bluebird');

const utils = require("./utils");

const delay = require("./delay");



function seeMe(token) {
    fetch(utils.URL_ME,utils.GET(token))
    .then(data=>data.json())
    .then(async data=> {
        console.log("user ",utils.TOKEN_ARRAY.indexOf(token) + 1, "counts = ", data.nuggetCount, " infrac = ", data.throttleInfractionCount, 'throttle :', data.totalThrottleMs);
       await delay.awaithrottle(1000);
        seeMe(token);
    });
}

function seeBoard(token=utils.TOKEN_ARRAY[0]) {
    return fetch(utils.URL_ALL,utils.GET(token))
    .then(data=>data.json())
    .then(data=> {

        //localStorage.setItem("users",JSON.stringify(data));
        console.log(data);
        const me  = data.filter(user=>user.username==="Arbi");
        console.log(me[0].nuggetCount);
       // seeBoard();
    });
}


async function start() {

   //tils.TOKEN_ARRAY.forEach(token=>see(token));
  /*  for  ( var index in utils.TOKEN_ARRAY) {
       await seeMe(utils.TOKEN_ARRAY[index]);
   }
 */
   seeBoard();

}

start();