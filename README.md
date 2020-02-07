# Google Forms Email on New Response 📬

Get email alert whenever someone fills your Google Forms.

## Motivation 🔥
I was tasked to set up email alert for a Google Form on one of our client's website at my current workplace: [Epower.ng](https://www.epower.ng). I know Google Forms already has the feature but the requirement is to send the alert to another email address 😳 and Forms will only send the alert to the creator's email which means the feature cannot work in my own case 😭. I have experience working with Google Apps Script (GAS) and fortunately Forms supports them and I came up with this solution and it uses the MailApp class of GAS to send the email alert.

## Usage 📑

1. Go to Google Forms
2. Click the 3 dots and select Script Editor
3. Clear the `myFunction()` code and Paste this instead
4. Then Save (Ctrl + S) and you will be prompted for the project name, enter a descriptive text and OK.
5. Now for the permissions part, you need to first try to run the project by clicking `▶` and a dialog box will appear and tell you that the script requires authorization. Click Continue. A second dialog box will then request authorization for specific Google services. Read the notice carefully, then click Allow. You may also be prompted that the app is not secure, just click `Advanced` and click `Proceed to (Project Name)`, you are the creator after all.
6. Click the `Edit` toolbar item and select `Current Project Triggers`
7. You will be redirected to Google Apps Script dashboard, select 'Add trigger' FAB Button
8. In the Form, `Choose which function to run` should be `emailOnNewResponse`...`Choose which deployment should run` should be `Head`...`Select event source` should be `From form`...`Select event type` should be `On form submit`...and then save.
9. You are good to go! 🚀🚀🚀

## Extra Notes
You can customize the `Code.gs` file to setup correct fields index and other and GAS is based on JavaScript and V8 engine which means it supports all modern JavaScript features except modules: [Read more here](https://developers.google.com/apps-script/guides/v8-runtime).
