# CS3012-Github-API-Interrogation-Assignmnet-

# Setup

Once you have downloaded the files navigate to the directory using your terminal and type the following command to install the needed dependencies :
```
npm install
```
As this is not the projects finishing point I did not want to set up a full authocation verification so you will need to generate your own client id and client secret in order for you to interact with the GithubAPI .So this navigate to github.com and go to your setting -> Developer Settings -> OAuth apps to register a new app to get your own key and secret. Once you have these go back to your directory and navigate to the following file to change the client ID and secret for the website to work.
```
../CS3012-Github-API-Interrogation-Assignmnet-/js/app.js
```

# Launch Website

Once setup is complete once again go into the directory using your terminal and type the following command to run the website locally. 
```
live-server
```
If you do not have live server installed it should be downloaded along with your dependencies during the "npm-install"
