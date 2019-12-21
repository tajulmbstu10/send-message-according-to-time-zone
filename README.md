## Send message according to time zone with a fixed time

This is a simple node app for sending message/mail/do something at time 12:00PM 31st december 2019 according to the zone from a set of zone. Here, I have write a method for print the time with a message in console according to the zone. 
using two different way I have done this. In my first way of solutions, Antarctica/DumontDUrville zone will not work because of node10 issue. 
In 2nd way solution with moment js will be worked perfectly. Here, I have stored all the zone as a list in './timeZoneData/timeZone.js' file. But, I can also fetch the zone list from any api end point where the zone list is available. 

## How to Setup 

1. Clone the repository 
2. Enter into the project folder
3. Open powershell here
4. Run the below script in powershell

    `npm install --save` 

Note: Node Js Should be installed. 

5. After successfully install all the packages, Run 

    `npm start` 

6. Now, It will run in localhost:3000. Just check your browser. url: localhost:3000  

7. Node App setup is done. 

