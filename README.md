# FriendFinder

Introduction 
---------------------------------------------

Welcome to the Friend Finder! I have developed this app to help people find friends based on their personality traits. The app presents the user with a simple survey to take and based on their answers they will be match with the user who has the most similar answers. 


Development
---------------------------------------------
The app is developed primaly using express as a framework to connect multiple javascript files to each other and the server. When the app is loaded it immediatley calls to the apiRoutes.js and htmlRoutes.js. The api file first pulls in another data file that contains an array of data that fills functions as pontential friend matches for the user. This file also posts that data to the API allowing for it to be called in the future. The htmlRoutes.js file directs the user based on the url that is put into the browser whether its the main page or the survey.

The real user functionality of this site lies within the survey page. When this page is loaded the user will input values for their name, a picture and the 10 questions. Once these values are submitted the are then taken and put into a newly created object that represents the user. That data is then taken and compared against every other user in the database(or in this case the API). This is done by running a series of loops that check for their compatibility. First a loop runs through every user and then it runs a second loop for each user comparing each value of their question score vs the users values for their questions. For each question the less of a difference between the user and the "friend" they are being compared to means they will be more compatible. As the loop runs through each "friend" if the total difference in score is less than the previous they will be considered the new match and the data variables are written with their name and picture, if not the loop moves on to the next person. Once run through the person who had the least difference in score will have their information on the data variables and those variables will be used to fill out the content for the modal that displays when the user clicks submit. When the user submits they will also have their information entered into the API so another user may match with them (if they dont leave the page!).


How To Use
-------------------------------------------

This app is very simple and straightforward to use. To initiate the survey simply load the page and click the survey button. Once clicked you will be taken to a survey that will ask you to fill out your name, provide a link to a picture and fill out 10 compatibility questions. For these 10 questions you will give an answer between 1-5 (with 1 being disagreement and 5 being total argeement) depending on how much you agree with the statement. After everything is entered you may click the submit button and be presented with the friend who closest matches your answers! 

Links
------------------------------------------------
Friend Finder App - https://gentle-headland-68978.herokuapp.com/
GitHub Repo - https://github.com/MattDague/FriendFinder


Technologies Used
----------------------------------------
- Express
- Node.js
- Javascript
- NPM 
- SQL
- Path 
- Bootstrap
- Heroku
- JQuery
- Font Awesome





