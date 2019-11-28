
const moment = require('moment');
const request = require('request');
const config = require('../config');
const AWS = require("aws-sdk");
const PAGE_ACCESS_TOKEN = config.PAGE_ACCESS_TOKEN;



AWS.config.update({
    region: "ca-central-1"
});


module.exports = function (){
    this.insertIntoChatlog = (senderID, messageText) =>{
        const utcTime = moment().utc().format();
        let graphURL = `https://graph.facebook.com/v5.0/${senderID}`;

        request({
            uri: graphURL,
            qs: { fields: "name",
                access_token: PAGE_ACCESS_TOKEN },
            method: 'GET',
        }, function (error, response, body) {
            if (!error) {
                //console.log(response);
                console.log(body);
                const userName = body.name;
                const docClient = new AWS.DynamoDB.DocumentClient();
                let params = {
                    TableName: "CHATLOG",
                    Item:{
                        "USER_ID": parseInt(senderID),
                        "TIMESTAMP": utcTime,
                        "TEXT": messageText
                    }
                }

                docClient.put(params, function(err, data) {
                    if (err) {
                        console.log(err);
                        //console.error("Unable to add movie", movie.title, ". Error JSON:", JSON.stringify(err, null, 2));
                        console.log("ERROR");
                    } else {
                        console.log("PutItem succeeded:", params.Item);
                    }
                });

            } else {
                //console.log(response);
                console.log("ERROR");
                console.error(error);
            }
        });
        
    }

}



