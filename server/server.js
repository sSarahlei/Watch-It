var express = require('express');
var bodyParser = require('body-parser');
var app = express();
app.use(bodyParser.json());
var path = require('path');
var dir=path.resolve('../client/admin/views');
app.use(express.static(dir));
var db=require('./db.js');


app.listen(3000, function () {
    console.log("server running at port 3000!");

});
app.get('/getCompanies', function (req, res) {
    console.log("serving getCompanies");
    var arr=db.test();

    var arrComp;

    arr.toArray(function(err, items) { //foreach
        arrComp=JSON.stringify(items);
        res.send(arrComp);

    });


});
//sarah
app.post('/insertCompany', function (req, res,next) {

    console.log("serving insertCompany");
    var document=req.body;
    console.log(document);
    var arr=db.insertCompany(document);
    console.log("arr"+arr);
    var arrComp;
    arr.toArray(function(err, items) { //foreach
        arrComp=JSON.stringify(items);
        //console.log(items);
        res.send(arrComp);

    });

});
//sophia
app.get('/deleteCompany/:id', function (req, res) {

    console.log("serving deleteCompany");
    console.log(req.params.id);
    var arr=db.deleteCompany(req.params.id);

    var arrComp;
    arr.toArray(function(err, items) { //foreach
        arrComp=JSON.stringify(items);
        //console.log(items);
        res.send(arrComp);

    });

});

/*Sarah*/
app.get('/',function(req,res){

    res.sendFile(path.join(dir,'/index.html'));
    //__dirname : It will resolve to your project folder.
});

app.get('/menu',function(req,res){
    res.sendFile(path.join(dir,'/menu.html'));

});
app.get('/orders',function(req,res){
    res.sendFile(path.join(dir,'/orders.html'));

});
app.get('/watch',function(req,res){
    res.sendFile(path.join(dir,'/watch.html'));

});
app.get('/company',function(req,res){
    res.sendFile(path.join(dir,'/company.html'));

});
app.get('/rights',function(req,res){
    res.sendFile(path.join(dir,'/rights.html'));

});
app.get('/message',function(req,res){
    res.sendFile(path.join(dir,'/message.html'));

});

/*statics (sarah)*/





// app.get('/getCompanies', function (req, res) {
//     console.log("serving getCompanies");
//    // res.sendFile(path.join(_dirname+’/index.html');
// });






