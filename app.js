
/**
 * Copyright 2017-present, Facebook, Inc. All rights reserved.
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * Messenger Platform Quick Start Tutorial
 *
 * This is the completed code for the Messenger Platform quick start tutorial
 *
 * https://developers.facebook.com/docs/messenger-platform/getting-started/quick-start/
 *
 * To run this code, you must do the following:
 *
 * 1. Deploy this code to a server running Node.js
 * 2. Run `npm install`
 * 3. Update the VERIFY_TOKEN
 * 4. Add your PAGE_ACCESS_TOKEN to your environment vars
 *
 */

'use strict';
const PAGE_ACCESS_TOKEN = require('./config');
//const PAGE_ACCESS_TOKEN = process.env.PAGE_ACCESS_TOKEN;
console.log('fire')
// Imports dependencies and set up http server
const
  request = require('request'),
  express = require('express'),
  body_parser = require('body-parser'),
  app = express().use(body_parser.json()); // creates express http server
  
const receivedMessage = require('./functions/receivedMessage');
const receivedPostback = require('./functions/receivedPostback');
const sendQuickReply = require('./functions/sendQuickReply');
const sendTextMessage = require('./functions/sendTextMessage');


// Sets server port and logs message on success
app.listen(process.env.PORT || 80, () => console.log('webhook is listening'));

// Health Check
app.get('/health', (req, res) => {
  res.json({status: "UP"});
  });


// Accepts POST requests at /webhook endpoint
app.post('/webhook', (req, res) => {
  
  // console.dir(req);
  // Parse the request body from the POST
  let body = req.body;
  console.dir(body);

  // Check the webhook event is from a Page subscription
  if (body.object === 'page') {

    body.entry.forEach(function(entry) {
      
    //   let pageID = pageEntry.id;
    //   let timeOfEvent = pageEntry.time;

    // Iterate over each messaging event
    entry.messaging.forEach((messagingEvent) =>{
        console.log(messagingEvent)
        if (messagingEvent.message) {
            receivedMessage(messagingEvent);
        } else if (messagingEvent.postback) {
            receivedPostback(messagingEvent);
        } else {
            console.log("Webhook received unknown messagingEvent: ", messagingEvent);
            // TODO
            // Write Error event insert into DB
        }
    })



    });
    // Return a '200 OK' response to all events
    res.status(200).send('EVENT_RECEIVED');

  } else {
    // Return a '404 Not Found' if event is not from a page subscription
    res.sendStatus(404);
  }

});

// Accepts GET requests at the /webhook endpoint
app.get('/webhook', (req, res) => {
  console.log("HELOO2");
  // console.dir(req);
  /** UPDATE YOUR VERIFY TOKEN **/
  const VERIFY_TOKEN = "UZ9AHr4fxsN5";

  // Parse params from the webhook verification request
  let mode = req.query['hub.mode'];
  let token = req.query['hub.verify_token'];
  let challenge = req.query['hub.challenge'];

  // Check if a token and mode were sent
  if (mode && token) {

    // Check the mode and token sent are correct
    if (mode === 'subscribe' && token === VERIFY_TOKEN) {

      // Respond with 200 OK and challenge token from the request
      // console.log('WEBHOOK_VERIFIED');
      res.status(200).send(challenge);

    } else {
      // Responds with '403 Forbidden' if verify tokens do not match
      res.sendStatus(403);
    }
  }
});

function handleMessage(sender_psid, received_message) {
  let response;

  // Checks if the message contains text
  if (received_message.text) {
    // Create the payload for a basic text message, which
    // will be added to the body of our request to the Send API
    response = {
      "text": `You sent the message: "${received_message.text}". Now send me an attachment!`
    }
  } else if (received_message.attachments) {
    // Get the URL of the message attachment
    let attachment_url = received_message.attachments[0].payload.url;
    response = {
      "attachment": {
        "type": "template",
        "payload": {
          "template_type": "generic",
          "elements": [{
            "title": "Is this the right picture?",
            "subtitle": "Tap a button to answer.",
            "image_url": attachment_url,
            "buttons": [
              {
                "type": "postback",
                "title": "Yes!",
                "payload": "yes",
              },
              {
                "type": "postback",
                "title": "No!",
                "payload": "no",
              }
            ],
          }]
        }
      }
    }
  }

  // Send the response message
  callSendAPI(sender_psid, response);
}

function handlePostback(sender_psid, received_postback) {
  console.log('ok')
   let response;
  // Get the payload for the postback
  let payload = received_postback.payload;

  // Set the response based on the postback payload
  if (payload === 'yes') {
    response = { "text": "Thanks!" }
  } else if (payload === 'no') {
    response = { "text": "Oops, try sending another image." }
  }
  // Send the message to acknowledge the postback
  callSendAPI(sender_psid, response);
}