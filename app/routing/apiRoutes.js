var friendsArray = require("../data/friends");


module.exports = function(app) {
    // A GET route that displays JSON of all possible friends
    app.get('/api/friends', function(req,res){
        res.json(friendsArray);
    });
    // A POST route that displays new friends scores to compare with possible friends
    app.post('/api/friends', function(req,res){
        console.log("working");
        var newFriendScores = req.body.scores;
        var scoresArray = [];
        var friendCount = 0;
        var bestMatch = 0;

    //Looping through friends list to compare with friends in friendsArray
    for (var i = 0; i < friendsArray.length; i++) {
        var scoresDiff = 0;
        //Run through scores to compare friends
        for (var j = 0; j < newFriendScores.length; j++) {
            scoresDiff += (Math.abs(parseInt(friendsArray[i].scores[j]) - parseInt(newFriendScores[j])));
        }
        //Push results into scoresArray
        scoresArray.push(scoresDiff)
    }
        //After friends are compared, find the best match
        for (var i = 0; i < scoresArray.length; i++) {
            if(scoresArray[i] <= scoresArray[bestMatch]){
                bestMatch = i;
            }
        }

        //returns bestMatch
        var bff = friendsArray[bestMatch];
        res.json(bff);

        //pushing new submission into friendsArray
        friendsArray.push(req.body);
    });
};

