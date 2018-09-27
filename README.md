# Dialogflow-Firebase Restaurant Bot

Customizable Restaurant Bot using Google's Dialogflow and Firebase functions.

# Dialogflow-Firebase Restaurant Bot

Configure Dialogflow

Go to www.dialogflow.com log in with your GMail and create an agent
Create the following intents:

- Book a table
- Menu
- House Specials
- Options

Go all the way to the bottom part of an Intent's page and you will see Fulfillment.
Click on: "Enable webhook call for this intent".
Enable this option on ALL of the intents (don't forget the Default Welcome Intent as well).
![alt text](https://github.com/ferdelamad/DialogflowFirebaseRestaurantBot/blob/master/imgs/tutorial/Fulfillment.png)

Always SAVE your changes on the intent's after modifying something.

Configure Firebase

Go to https://firebase.google.com/ an you should be login automatically to the same GMail account.
On the top-right click on "GO TO CONSOLE", an voila your Dialogflow project should be there already.
![alt text](https://github.com/ferdelamad/DialogflowFirebaseRestaurantBot/blob/master/imgs/tutorial/Firebase_project.png)
Do the following:

- Click on your project.
- On the next page click on "Choose data sharing settings".
- Check both boxes on the pop-up window that will open and click on "Finish".

Install Firebase functions

Watch the following tutorial: https://www.youtube.com/watch?v=DYfP-UIKxH0
(you will not need to NPM install anything because everything is already in the package.json of the repo).
