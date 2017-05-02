// Custom JavaScript by Garrett Estrin | GarrettEstrin.com



// Function to find the last game the ducks played
// example api call for all games on specific date
// http://api.sportradar.us/nhl-ot4/games/2017/05/01/schedule.json?api_key=gpku2at4tqngufd65hyzgfcw
// http://api.sportradar.us/nhl-ot4/games/117/4/2/schedule.json?api_key=gpku2at4tqngufd65hyzgfcw
function findLastGame(){
  var base = 'http://api.sportradar.us/nhl-ot4/games/';
  var dt = new Date();
  var year = yyyy + '/';
  var month = mm +'/';
  var date = dd + '/';
  var top = 'schedule.json?api_key=gpku2at4tqngufd65hyzgfcw';

  var url = base + year + month + date + top;
  console.log(url);
}
// Function to pull data from that game
function getLastGame(){

}
// Function to determine if ducks were home team
function homeTeam(){

}
// Function to get home and away scores
function getScores(){

}
// Function to compare the scores bases on ducks being home team or not
function compareScores(){

}

// Function and variables to get yesterdays date
var dd;
var mm;
var yyyy;
function getDate(){
  today = new Date();
  yesterday = new Date(today);
  yesterday.setDate(today.getDate() - 1);
  dd = yesterday.getDate();
  mm = yesterday.getMonth()+1; //January is 0!
  yyyy = yesterday.getFullYear();
  if(dd<10){
    dd='0'+dd
  } if(mm<10){
    mm='0'+mm
  }

}

getDate();
