var express = require('express');
var bodyParser = require('body-parser');
var app = express();
app.use(bodyParser.json());
var path = require('path');
 var dir=path.resolve('../client/admin/views');
var dirControllers=path.join(__dirname, '../client/admin/controllers');
app.use(express.static(dirControllers));
app.use(express.static(dir));
//app.use(express.static(dirCustomer));

//console.log(db.dbw);
var db=require('./db.js');
app.listen(3000, function () {
    console.log("server running at port 3000!");

});
//companies
app.get('/getCompanies', function (req, res) {
    console.log("serving getCompanies");
    var arr=db.getAllCompanies();

    var arrComp;

    arr.toArray(function(err, items) { //foreach
         arrComp=JSON.stringify(items);
         res.send(arrComp);

    });


});
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

app.post('/insertWatch', function (req, res,next) {

    console.log("serving insertWatch");
    var document=req.body;
    console.log(document);
    var arr=db.insertWatch(document);
    console.log("arr"+arr);
    var arrComp;
    arr.toArray(function(err, items) { //foreach
        arrComp=JSON.stringify(items);
        //console.log(items);
        res.send(arrComp);

    });

});

app.post('/insertOrder', function (req, res,next) {


    console.log("serving insertOrder");

    var document=req.body;
    console.log(document);
    var arr=db.insertOrder(document);
    console.log("arr"+arr);
    var arrComp;
    arr.toArray(function(err, items) { //foreach
        arrComp=JSON.stringify(items);
        //console.log(items);
        res.send(arrComp);

    });

});

//tzofia
//orders
app.get('/getOrders', function (req, res) {
    console.log("serving getOrders");
    var arr=db.getAllOrders();

    var arrOrders;

    arr.toArray(function(err, items) { //foreach
        arrOrders=JSON.stringify(items);
        res.send(arrOrders);

    });


});
app.get('/deleteOrders/:id', function (req, res) {

    console.log("serving deleteOrders");
    console.log(req.params.id);
    var arr=db.deleteOrder(req.params.id);

    var arrOrders;
    arr.toArray(function(err, items) { //foreach
        arrOrders=JSON.stringify(items);
        //console.log(items);
        res.send(arrOrders);

    });

});

//watches
//tzofia
app.get('/getWatches', function (req, res) {
    console.log("serving getWatches");
    var arr=db.getAllWatches();

    var arrWatches;

    arr.toArray(function(err, items) { //foreach
        arrWatches=JSON.stringify(items);
        res.send(arrWatches);

    });


});
app.get('/deleteWatch/:id', function (req, res) {

    console.log("serving deleteWatche");
    console.log(req.params.id);
    var arr=db.deleteWatches(req.params.id);

    var arrWatches;
    arr.toArray(function(err, items) { //foreach
        arrWatches=JSON.stringify(items);
        //console.log(items);
        res.send(arrWatches);

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

