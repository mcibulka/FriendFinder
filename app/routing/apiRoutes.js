const friendsList = require("../data/friends");

module.exports = (app) => {
  app.get("/api/friends", (req, res) => {
    res.json(friendsList);
  });


  app.post("/api/friends", (req, res) => {
    let lowest = 0;
    let match = "";

    friendsList.forEach((friend) => {
      let totDiff = 0;
      
      // Calculate total difference between each friend
      for (let i = 0 ; i < 10 ; i++) {
        const userScore = req.body.scores[i];
        const friendScore = friend.scores[i];

        const diff = Math.abs(userScore - friendScore);
        totDiff += diff;
      }

      // Set default match to first friend, Emma
      if (friend.name === "Emma") {
        lowest = totDiff;
        match = "Emma";
      }
      else {
        if (totDiff < lowest) {
          lowest = totDiff;
          match = friend.name;
        }
      }
    });

    res.send(`<h1>Match</h1><h2>${match}</h2>`);
  });
};