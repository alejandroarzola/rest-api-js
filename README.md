# rest-api-js

JavaScript REST API

The file is called rest-api-functions.

Just include it as any other JS file in your page/view but remember to always add it after JQuery :)

This is a small REST api I've written.

What it does, it's that enables the user to save some lines of code by wrapping the $.ajax function.

The API is comprised by five functions.
I'll briefly describe them.

postObject(postUrl, postData)
What this function does is to send data to your back end (it could be C#, PHP, Ruby on Rails, Java, etc) and it fetches a JSON serialized object (originally written in C#) called ResultMessage which consists of a class with these properties:

Success: whenever your processing is successfull this message is filled.
Error: this message is filled when an error or exception takes place.
ErrorCause: in case you need to give further detail on the error.
ErrorNumber: if you have a numeric error code, you can fill it here.
DebugInformation: an additional property you might use if needed be to send any other messages.

This function uses two parameters:

postUrl: the back end url where you're posting the data.
postData: the data you're sending to the back end. 

Our next function is:

ajaxWithCallbacks(url, data, ajaxSettings, successCallback, errorCallback, beforeSendCallback, completeCallback)
This is an heftier version of the previous function.

Example: ajaxWithCallbacks("myUrl","myData", new ajaxSettings());
This example takes only those 3 parameters and expects back a ResultMessage from the server.

It takes these parameters:

url: the back end url where you're posting the data.
data: the data you're sending to the back end.
ajaxSettings: a configuration object (explained later in this file).
successCallback: a callback function used when you have a successfull processing.
errorCallback: a callback function used when there's been an error in the processing.
beforeSendCallback: a callback function used before any data is sent to the server.
completeCallback: a callback function used after the ajax call is complete.

ajaxSettings(settings)
This is an object or function ( it's up to you how you wanna see it :P ) for configuring the ajaxWithCallbacks function.
It takes an associative array of parameters that must match the ones inside this function.
This function sets up the parameters for the $.ajax function call.

function ajaxCallbackError(jqXHR, textStatus, errorThrown)
This is the default error callback function in ajaxWithCallbacks (it could be added to postObject too).
It takes the 3 default error function parameters.

function defaultCallback()
This is a dummy function which is used when checking for a custom callback in ajaxWithCallbacks.

function defaultSuccessCallback(response)
As the name suggests, this is a default success callback function :P it takes the response ResultMessage object sent by the server and displays either the Success or Error message.

var restApiTypes
This is a small associative array/enum where the available REST verbs are listed.

var restApiDataTypes
This is a small associative array/enum where the available data types to be sent to the server are listed
