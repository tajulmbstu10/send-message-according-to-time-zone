const express = require('express')
var moment = require('moment-timezone');

const app = express()
const port = 3000
const timeZones = require('./timeZoneData/timeZones')


var setOfTimeZone= timeZones.timeZones

// -------- foreach loop start 
  setOfTimeZone.forEach(function(item, index){

// ------------------------------------------------------------------------------
// 1st way ( Antarctica/DumontDUrville not supported using this way Node10 issue) 
// -------------------------------------------------------------------------------

    // var setFixedTime = new Date(2020, 0, 1, 0, 0, 0).toLocaleString("en-US", { hour12: false})
    // var getLocationTime = new Date().toLocaleString("en-US", {timeZone: item, hour12: false})
  
    // var difference = Date.parse(setFixedTime) - Date.parse(getLocationTime)

    // if(difference>=0){
    //     setTimeout(()=>{sendMessage(item, setFixedTime)},difference)
    // }

// ------ 1st way end 

// ----------------------------------------------------------
// 2nd way ( using moment js)
// ----------------------------------------------------------

    var setTime = moment('2020-01-01 00:00:00').format('YYYY-MM-DD HH:mm:ss');
    // var setTime = moment('2019-12-21 14:50:00').format('YYYY-MM-DD HH:mm:ss');
    var getTime = moment().tz(item).format('YYYY-MM-DD HH:mm:ss');
    var newDifference = Date.parse(setTime) - Date.parse(getTime)

    if(newDifference>=0){
        setTimeout(()=>{sendMessage(item, setTime)},newDifference)
    }
// ------ 2nd way end 
     
    })
// -------- foreach loop end 
    

// -------- call the method to send message print 
    function sendMessage(zoneName, time){
    //   console.log(`hi, it is ${time} for the zone of ${zoneName}`)
      console.log(`send the message 'Happy New Year' to all the user of ${zoneName}`)
      }


app.get('/', (req, res) => res.send('Welcome To Message Transfer Server'))

app.listen(port, () => console.log(`Hurray, Apps run in port ${port}!`))