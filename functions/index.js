const functions = require("firebase-functions");

//import Dialogflow and start it
const { dialogflow } = require("actions-on-google");
const app = dialogflow({ debug: true });

//require the functions to handle the intents
const {
  welcome,
  bookATable,
  menu,
  houseSpecials,
  restaurantInfo,
  options
} = require("./handlers");

app.intent("Default Welcome Intent", welcome);

app.intent("Book a Table", bookATable);

app.intent("Menu", menu);

app.intent("House Specials", houseSpecials);

app.intent("Restaurant Info", restaurantInfo);

app.intent("Options", options);

exports.personalAssistant = functions.https.onRequest(app);
