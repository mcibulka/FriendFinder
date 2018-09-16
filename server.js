const express = require("express");

const app = express();

require("./app/routing/htmlRoutes")(app);

app.listen(3000, () => {
  console.log("App running on port 3000!");
});