const
  express = require('express'),
  app = express(),
  path    = require("path"),
  PORT = 3000


app.use(express.static('public'))

app.get('/', function(req, res){
  res.sendFile(path.join(__dirname+'/index.html'))
})

app.listen(PORT, function(){
  console.log("Connected on port " + PORT);
})
