

const fetch = require("node-fetch");
const Bluebird = require('bluebird');

const utils = require("./utils");
const operation = require("./operation");

const delay = require("./delay");

fetch.Promise = Bluebird;

var listCounter = 1;

let TIME = 1510;

const ARBI_ID = "5dea82bc8bd8796162b501ff";
const AZMI_ID = "5dea82bc8bd8796162b50201";

const IDs =[ARBI_ID,AZMI_ID];

const answerSwitch = {
    "MAX" : operation.max,
    "CALCULUS" : operation.calc,    
    "PRIME":operation.prime 
};


 function getAndAnswer(token, loop = true) {



        fetch(utils.URL_QUESTIONS, utils.GET(token))
        .then(data => data.json(),err=>console.log("fetch errr", err))
        .then( async data => {

           
            var i=1;
            //console.log("fetched for user ", utils.TOKEN_ARRAY.indexOf(token) + 1);
            for(var el in data) {
                console.log(el);
                if (! answerSwitch[data[el].type]) continue;
                const res = answerSwitch[data[el].type](data[el].hint);
                console.log("waiting");
                await delay.awaithrottle(TIME);
                console.log("done, anwsering now for user ",utils.TOKEN_ARRAY.indexOf(token) + 1);
                await answer(data[el]._id, res,token);
                i++;
            }
         
         
            listCounter++;


            console.log("List ", listCounter);
            await delay.awaithrottle(TIME);

            if(loop) getAndAnswer(token);

        });
        
        
}
 

function newThrottle() {

    return fetch(utils.URL_ME,utils.GET())
    .then(data=>data.json());
    
}
function start() {  

   
        //console.log(utils.GET(token));
      //  getAndAnswer(utils.TOKEN_ARRAY[0]);

       //attackArbiLoop();
    defendAndAttack();
       //defendAll();
    //getAttackers().then(data=>console.log(data));

}

function getMe() {
    return fetch(utils.URL_ME,utils.GET())
    .then(data=>data.json());
}

function getAttackers() {
    return fetch(utils.URL_ME,utils.GET())
        .then(data=> data.json())
        .then(data=>data.attackedBy.map(el=>el._id))
}

function attack(id) {
   console.log(utils.GET());
    return fetch(utils.URL_ATTACK(id),utils.GET(utils.TOKEN))
    .then(data=>data.json());
}

function attackArbi() {
    return attack(ARBI_ID);
}

async function attackArbiLoop() {
  //  await delay.awaithrottle(TIME);
    await attackArbi();
    attackArbiLoop();
}

function defend(id) {
    return fetch(utils.URL_DEFEND(id),utils.GET())
    .then(data=> {
        const res = data.json();
        console.log(res);
        return res;
    });
}


async function defendAll(ids = null) {
   if (ids==null) getAttackers()
   .then(async data=> {
       for(var index in data) {
        await defend(data[index]);
        await delay.awaithrottle(TIME);
       }
   });

   else for(var index in ids) {
    await defend(ids[index]);
    await delay.awaithrottle(TIME);
   }
}

async function defendArbiAzmin() {
    for (var index in IDs) {
        await defend(IDs[index]);
        await delay.awaithrottle(TIME);
    }
}




async function defendAndAttack() {
    const attackers = await getAttackers();
    console.log("my attacers", attackers);
    if (attackers.length > 0) {
        console.log("attacked");
        await  defendAll(attackers);
        const me = await getMe();
        console.log(me);
    }

    else await getAndAnswer(false);
    defendAndAttack();
      
       
       

    
}

function answer(id, value,token) {


    return fetch(utils.URL_ANSWER(id, value), utils.GET(token))
        .then(data => {
            //data.json();
            console.log(data.json());
        },err=>console("answer error", err));
       
}


function answerDelay(id, value, token) {
    return new Promise(resolve => {


      
            answer(id, value,token)
            .then(async data=> {
                console.log("answer response ",data);
                await delay.awaithrottle();
                resolve();
            });
        });        
    
}



function attack(id,token) {
        fetch(utils.URL_ATTACK(id),utils.HEADERS(token))
        .then(data=> {
            console.log("attacked");
        });
}



start();
   