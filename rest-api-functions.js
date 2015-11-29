function postObject(postUrl, postData) {
    $.ajax({
        type: restApiTypes.POST,
        dataType: 'json',
        url: postUrl,
        data: JSON.stringify(postData),
        contentType: 'application/json; charset=utf-8',
        success: defaultSuccessCallback,
        error: ajaxCallbackError
    });
}


function ajaxWithCallbacks(url, data, ajaxSettings, successCallback, errorCallback, beforeSendCallback, completeCallback) {
    $.ajax({
        type: ajaxSettings.type,
        dataType: ajaxSettings.dataType,
        url: url,
        data: (ajaxSettings.stringifyData == true ? JSON.stringify(data) : data),
        contentType: ajaxSettings.contentType,
        beforeSend: (beforeSendCallback !== undefined ? beforeSendCallback : defaultCallback),
        success: (successCallback !== undefined ? successCallback : defaultSuccessCallback),
        error: (errorCallback !== undefined ? errorCallback : ajaxCallbackError),
        complete: (completeCallback !== undefined ? completeCallback : defaultCallback)
    });
}

function ajaxSettings(settings) {
    this.type = restApiTypes.POST, //GET, POST, PUT, DELETE
    this.dataType = 'json', //html,xml
    this.contentType = 'application/json; charset=utf-8' //text-plain, application-octet
    this.stringifyData = true; //use this to send json stringified parameters or raw parameters
    if (settings !== undefined) {
        for (var setting in settings) {
            if (this.hasOwnProperty(setting)) {
                this[setting] = settings[setting];
            }
        }
    }

    return {
        type: this.type,
        dataType: this.dataType,
        contentType: this.contentType,
        stringifyData: this.stringifyData
    }
}

function ajaxCallbackError(jqXHR, textStatus, errorThrown) {
    alert("There's been an error: <br/>" + "Type: " + textStatus + "<br/>Error: " + errorThrown);
}

function defaultCallback() {
    return true;
}

function defaultSuccessCallback(response) {
    if (response.Success != null && response.Success != "") {
        alert(response.Success);
    } else if (response.Error != null && response.Error != "") {
        errorMessage = response.Error + (response.ErrorCause && response.ErrorCause != "" != null ? "<br /> " + response.ErrorCause : "")
        alert(errorMessage);
    } else {
        alert("There's been an unexpected error, please contact Tech support.");
    }
}

var restApiTypes = {
    GET: 'GET',
	POST: 'POST',
    PUT: 'PUT',
    DELETE: 'DELETE'
}

var restApiDataTypes = {
	XML: 'xml',
	HTML: 'html',
	SCRIPT: 'script',
	JSON: 'json',
	JSONP: 'jsonp',
	TEXT: 'text'
	
	
}