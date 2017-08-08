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