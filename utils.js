

const URL_QUESTIONS = "http://hackathon.internal.ats-digital.com/api/nuggets/discover";


const URL_ANSWER = (id,trigger)=>`http://hackathon.internal.ats-digital.com/api/nuggets/${id}/claim?trigger=${trigger}`;


const  URL_BURST = "http://hackathon.internal.ats-digital.com/api/users/burst";

const URL_ATTACK   = (id)=>`https://hackathon.internal.ats-digital.com/api/users/${id}/attack`;

const URL_ME = "http://hackathon.internal.ats-digital.com/api/users/me";

const URL_ALL  ="http://hackathon.internal.ats-digital.com/api/users/all";

const TOKEN =  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZGVhODJiYzhiZDg3OTYxNjJiNTAxZmMiLCJpYXQiOjE1NzU2NTEzMDN9.2MXpZhjaHVd_LirNChXdRCKtJjZ6v50MV5x3b5MYTew";

const TOKEN_ARRAY  = [
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZGVhODJiYzhiZDg3OTYxNjJiNTAxZmMiLCJpYXQiOjE1NzU2NTEzMDN9.2MXpZhjaHVd_LirNChXdRCKtJjZ6v50MV5x3b5MYTew",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZGU3YzI0ZTVmOWY3ZjZiMDM5MGU0MjkiLCJpYXQiOjE1NzU1NDIxMDN9.RFGhSungfHbfVSa6q1Pph_awZqW2DyP27DsOiig2VMg",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZGU3YzI0ZTVmOWY3ZjZiMDM5MGU0MjkiLCJpYXQiOjE1NzU1NDI0OTN9.tv_q-Vpv8EEQmJfZ0W3ucmeOdpq3Be7oQUftb4CzDTw",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZGU3YzI0ZTVmOWY3ZjZiMDM5MGU0MjkiLCJpYXQiOjE1NzU1NTMzODl9.Zrmw8A-2QSGap0rf9LLrXokdPhfGI9qwS9P2t_TENKY"
];


const URL_DEFEND   = (id)=>`https://hackathon.internal.ats-digital.com/api/users/${id}/defend`;


const URL_AUTH = "http://hackathon.internal.ats-digital.com/api/auth/login";

const AUTH_ACCESS ={
    "username": "Yassine",
    "email": "yassine@hackathon.org",
    "password": "dea2c5ea-effb-40ed-9406-536e6c1e6943"
  };

  
const  HEADERS = (token=TOKEN)=>({
    'Authorization': 'Bearer '  + token.toString(), 
    'Content-Type': 'application/json'
  });


  const GET =(token = TOKEN)=>({
      headers : HEADERS(token),
      method : "GET"
  });

  const POST = (token=TOKEN)=>({
      headers : HEADERS(token),
      method:"POST"
  });









module.exports = {
    URL_QUESTIONS,
    HEADERS,
    GET ,
    POST,
    URL_ANSWER,
    URL_ATTACK,
    URL_BURST,
    URL_ME,
    URL_ALL,
    URL_DEFEND,
    TOKEN_ARRAY,
    TOKEN
};

