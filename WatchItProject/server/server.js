
var express = require('express');
var bodyParser = require('body-parser');
var app = express();
app.use(bodyParser.json());
var path = require('path');
var mongodb=require('mongodb');
var mongoose=require('mongoose');
var fs=require('fs');
var dir=path.resolve('../client/admin/views');
var dirControllers=path.join(__dirname, '../client/admin/controllers');
app.use(express.static(dirControllers));
app.use(express.static(dir));
var multer = require('multer');
var dirJs=path.join(__dirname, '../public');
app.use(express.static(dirJs));
//app.use(express.static(dirCustomer));
app.use(bodyParser.urlencoded({extended: true}));


//console.log(db.dbw);
var db=require('./db.js');
var fileName;


app.listen(3000, function () {
    console.log("server running at port 3000!");

});

//login
var Storage = multer.diskStorage({
    destination: function (req, file, callback) {
        callback(null, '../public/images');
    },
    filename: function (req, file, callback) {
        callback(null, file.originalname);
        fileName=file.originalname;
        //console.log(fileName);
    }
});


var upload = multer({ storage: Storage }).array("imgUploader", 3);
app.post("/api/Upload" ,function (req, res) {
    upload(req, res, function (err) {
        if (err) {

            return res.end("Something went wrong!");
        }
        return res.redirect("/");


    });
});

app.post("/api/UploadC/", function (req, res) {
    //var id=req.params.id;
    var id='58654402cab7e7d4fd4dadf2';

    upload(req, res, function (err) {
        if (err) {
            return res.end("Something went wrong!");
        }
        var value_key={
            "_id":new mongodb.ObjectID(id),
        }
        //console.log(value_key);
        var document={
            "image":fileName,
        };
        var arr=db.updateCompany(value_key,document);
        return res.end("File uploaded sucessfully!.");
    });
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


//chedva
app.post('/updateCompany', function (req, res,next) {
    console.log("serving updateCompany");
    var document=req.body;
    // console.log(document);

    var value_key={
        "_id":new mongodb.ObjectID(document.id),
    }
    //console.log(value_key);
    var arr=db.updateCompany(value_key,document);
    //console.log("arr"+arr);
    var arrComp;
    arr.toArray(function(err, items) { //foreach
        arrComp=JSON.stringify(items);
        console.log(items);
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

//adina
app.post('/insertUser', function (req, res, next) {
    alert("serving insertUser");
    console.log("serving insertUser");
    var document=req.body;
    console.log(req);
    var arr=db.insertUser(document);
    console.log("arr"+arr);
    var arrComp;
    arr.toArray(function(err, items) { //foreach
        arrComp=JSON.stringify(items);
        //console.log(items);
        res.send(arrComp);

    });


});
app.get('/deleteUser/:id', function (req, res) {

    console.log("serving deleteUser");
    console.log(req.params.id);
    var arr=db.deleteUser(req.params.id);

    var arrUser;
    arr.toArray(function(err, items) { //foreach
        arrUser=JSON.stringify(items);
        //console.log(items);
        res.send(arrUser);

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

    var arr=db.deleteWatches(req.params.id);

    var arrWatches;
    arr.toArray(function(err, items) { //foreach
        arrWatches=JSON.stringify(items);
        //console.log(items);
        res.send(arrWatches);

    });

});
app.get('/getTypes', function (req, res) {
    console.log("serving getTypes");
    var arr=db.getAllTypes();

    var arrT;

    arr.toArray(function(err, items) { //foreach
        arrT=JSON.stringify(items);
        res.send(arrT);

    });


});
app.post('/updatetWatch', function (req, res,next) {

    console.log("serving updateWatch");
    var document=req.body;
    console.log(document);
    var value_key={
        "_id":new mongodb.ObjectID(document.id),
    }
    //console.log(value_key);
    var arr=db.updateWatch(value_key,document);







    var arrComp;
    arr.toArray(function(err, items) { //foreach
        arrComp=JSON.stringify(items);
        //console.log(items);
        res.send(arrComp);

    });

});






