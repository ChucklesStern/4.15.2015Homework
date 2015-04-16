//Again basic object and parameters here. These are the building blocks of our database
var dog = function (name, breed, color) {
    this.name = name;
    this.breed = breed;
    this.color = color;
}
//An array created in order to store the objects "represented" by each building block of the database
var meals = [];

//THE URL for Firebase will have '/JSON' removed since it points to the entire directly and /json must be appended to the end of key markers so the specific objects may be deleted on fireabase rather than the entire RESPONSE folder
var firebaseUrl = "https://radiant-torch-6001.firebaseio.com/";

var succsess = function (takeString) {

};

var error = function (alert) {

};

var getAjax = function (callback) {
    var request = new XMLHttpRequest();
    request.open('GET', firebaseUrl + '/.json', true);
    request.onload = function () {
        callback(this.response);
        if (this.status >= 200 && this.status < 400) {
            //success cb
            callback(takeString);
        } else {
                       console.error(this.response);
            
            //error cb
                       callback(error);
          
        }
    }
    request.send();
}
getAjax(alert);
//Question Number2
var takeString = function () {
    document.getElementById('DisplayFood').innerHTML = 'String';
};

getAjax(takeString);
//question number 3
var anonyMouse = function () {
    getAjax(alert);
    getAjax(takeString);
}
getAjax(anonyMouse);



getAjax(takeString, alert);