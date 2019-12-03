

const URL_QUESTIONS = "http://hackathon.internal.ats-digital.com/api/nuggets/discover";


const URL_ANSWER = (id,trigger)=>`http://hackathon.internal.ats-digital.com/api/nuggets/${id}/claim?trigger=${trigger}`;


const  URL_BURST = "http://hackathon.internal.ats-digital.com/api/users/burst";

const URL_ATTACK   = (id)=>`https://hackathon.internal.ats-digital.com/api/users/${id}/attack`;

const TOKEN =  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZGQ2ODFhYzhlNjc4MjBlZDY1NGY1ZTQiLCJpYXQiOjE1NzQzNDA1MjJ9.Q-kREfR5wofbStKA8OC_ted-JspzZrNfTgnmzhjWeEo";

const  HEADERS = {
    'Authorization': 'Bearer '  + TOKEN, 
    'Content-Type': 'application/json'
  };


  const GET = {
      headers : HEADERS,
      method : "GET"
  };

  const POST = {
      headers : HEADERS,
      method:"POST"
  };









module.exports = {
    URL_QUESTIONS,
    HEADERS,
    GET ,
    POST,
    URL_ANSWER,
    URL_ATTACK,
    URL_BURST
};

