require("dotenv").config({path:"../.env"});
const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors("*"));

app.use(cors({origin:"*"}));
// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: false }));

const db = require("./app/models");

console.log(db.url);

db.mongoose
  .connect(db.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log("Connected to the database!");
  })
  .catch(err => {
    console.log("Cannot connect to the database!", err);
    process.exit();
  });

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to bezkoder application." });
});

require("./app/routes/turorial.routes")(app);

// set port, listen for requests
const PORT = process.env.NODE_LOCAL_PORT || 6868;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
