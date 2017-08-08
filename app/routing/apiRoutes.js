
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