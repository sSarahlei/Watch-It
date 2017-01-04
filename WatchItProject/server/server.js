


var express = require('express');
var app = express();
var path = require('path');



app.listen(3000, function () {
    console.log("server running at port 3000!");
});

app.get('/getCompanies', function (req, res) {
    console.log("serving getCompanies");
   // res.sendFile(path.join(_dirname+’/index.html');
});





