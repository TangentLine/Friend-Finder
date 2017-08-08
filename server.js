var express = require ("express");
var bodyParser = require ("body-parser");
var path = require ("path");
//express app
var app = express ();
var PORT = 3000;
//express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json"}));
//friend survey
var friend = [{
    "name":"Ahmed",
    "photo":"https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg",
    "scores":[
        5,
        1,
        4,
        4,
        5,
        1,
        2,
        5,
        4,
        1
      ]
  }];
  //routes
  app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "app/public/home.html"));
  });
  app.get("/survey", function (req, res){
    res.sendFile(path.join(__dirname, "app/public/survey.html"));
  });
  //new friend  - JSON inputs
  app.get("/app/:friends?", function(req, res){
    var chosen = req.params.friends;
    if (chosen) {
      console.log(chosen);
      for(var i = 0; i < friends.length; i++){
        if (chosen ===friends[i].routeName){
          return res.json(friends[i]);
        }
      }
      return res.json(false);
    }
    return res.json(friends);
  });
  app.post("/api/new", function (req, res){
    var newfriend = req.body;
    newfriend.routeName =
    newfriend.name.replace (/\s+/g,"").toLowerCase();
    console.log (newfriend);
    friends.push(newfriend);
    res.json(newfriend);
  });
//server to begin listening
  app.listen(PORT, function(){
    console.log("Friend finder app listening on PORT " + PORT);
  });