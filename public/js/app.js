// Custom JavaScript by Garrett Estrin | GarrettEstrin.com

var gameinfo;
var gameEnd;
var ducksScore;
var opponentScore;
var win;
var $content = $('.content')[0];
$(document).ready(function() {
  $.getJSON("https://spreadsheets.google.com/feeds/list/1hKrvATyh88jv_a1DTZ0jVdcR3b5A6MjPdjZgXJ81SGM/od6/public/values?alt=json", function(data) {
    gameinfo = data.feed.entry[data.feed.entry.length-1].gsx$gameinfo.$t
    getTypeOfEnd(gameinfo)
    getScores(gameinfo)
  })
})

function getTypeOfEnd(gameinfo){
  gameinfo = gameinfo.split(' ')
  if(gameinfo[0] == 'Final/OT:') {
    gameEnd = 'Overtime';
  } else if (gameinfo[0] == 'Final/SO:') {
    gameEnd = "Shoot Out"
  } else {
    gameEnd = "Regulation"
  }
}

function getScores(gameinfo){
  gameinfo = gameinfo.split(' ')
  if(gameinfo[1] == "Ducks"){
    ducksScore = gameinfo[2];
    opponentScore = gameinfo[4].split('');
    opponentScore = opponentScore[0];
  } else {
    ducksScore = gameinfo[4].split('');
    ducksScore = ducksScore[0];
    opponentScore = gameinfo[2];
  }
  didDucksWin(ducksScore,opponentScore)
}

function didDucksWin(ducksScore, opponentScore){
  if(ducksScore>opponentScore){
    win = true
  } else {
    win = false
  }
  buildDom(win)
}

function buildDom(win){
  console.log("buildDom hit");
  if(win == true){
    $content.textContent = "YES"
  }
}
