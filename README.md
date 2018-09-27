# Dialogflow-Firebase Restaurant Bot

**Customizable Restaurant Bot using Google's Dialogflow and Firebase functions.**
<img src="http://g.recordit.co/HJnn9qZlTV.gif" width="85%" height="85%"><br />


### Configure Dialogflow <br />

- Go to www.dialogflow.com log in with your GMAIL.
- Create an agent.
- Create the following intents:
  <br />
  <img src="https://github.com/ferdelamad/DialogflowFirebaseRestaurantBot/blob/master/imgs/tutorial/Intents.png" width="65%" height="65%"><br />
- Create training phrases for all of them like this:
  <img src="https://github.com/ferdelamad/DialogflowFirebaseRestaurantBot/blob/master/imgs/tutorial/TrainingP.png" width="65%" height="65%"><br />
- Configure "Actions", "Parameters" and "Prompts" only for the **Book a table intent**:
  <img src="https://github.com/ferdelamad/DialogflowFirebaseRestaurantBot/blob/master/imgs/tutorial/ActionsAndParameters.png" width="65%" height="65%"><br />

<br />
Go all the way to the bottom part of an Intent's page and you will see Fulfillment.<br />
Click on: "Enable webhook call for this intent".<br />
Enable this option on ALL of the intents (don't forget the Default Welcome Intent as well).
<br />
 
 <img src="https://github.com/ferdelamad/DialogflowFirebaseRestaurantBot/blob/master/imgs/tutorial/Fulfillment.png" width="65%" height="65%">

Always **SAVE** your changes on the intent's after modifying something.

<br />

### Configure Firebase <br />
<br />
Go to https://firebase.google.com/ an you should be login automatically to the same GMAIL account.<br />
On the top-right click on "GO TO CONSOLE", an voila your Dialogflow project should be there already.<br />
<br />

 <img src="https://github.com/ferdelamad/DialogflowFirebaseRestaurantBot/blob/master/imgs/tutorial/Firebase_project.png" width="65%" height="65%">

<br />

**Do the following:**

- Click on your project.
- On the next page click on "Choose data sharing settings".
- Check both boxes on the pop-up window that will open and click on "Finish".
  <br />
  
### Install Firebase functions <br />
<br />
**Run: npm install -g firebase-tools**<br />
**Cd into the functions folder and run npm install**<br />
<br />
Watch the following tutorial: https://www.youtube.com/watch?v=DYfP-UIKxH0<br />
(*You won't need to NPM install anything because everything is already in the package.json of the repo*). <br />

On the same functions folder run **"firebase deploy"** to deploy your functions to handle the intents on the back-end.<br />

**Copy the Function URL**
<br />


 <img src="https://github.com/ferdelamad/DialogflowFirebaseRestaurantBot/blob/master/imgs/tutorial/FunctionURL.png" width="65%" height="65%">

<br />
- Go to your Dialogflow agent page, click on **Fulfillment** on the left menu.<br />
- Then enable Webhook and past the link of the functions.<br />
- Save the changes.
<br />

<img src="https://github.com/ferdelamad/DialogflowFirebaseRestaurantBot/blob/master/imgs/tutorial/Webhook.png" width="65%" height="65%">

<br />

**Test your bot with the simulator**
<br />
 <img src="https://github.com/ferdelamad/DialogflowFirebaseRestaurantBot/blob/master/imgs/tutorial/Simulator.png" width="30%" height="30%">
<br />
You can integrate your bot with Facebook or Slack in the "Integrations" menu of your Dialogflow console.

**Happy hacking!**
