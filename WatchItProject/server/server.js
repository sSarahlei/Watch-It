var express = require('express');
var bodyParser = require('body-parser');
var app = express();
app.use(bodyParser.json());
var path = require('path');
var mongodb=require('mongodb');
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
// app.use(express.bodyParser({uploadDir:'/path/to/temporary/directory/to/store/uploaded/files'}));
// var fs = require('fs');
// var path = require('path'),
//
// // ...
// app.post('/upload', function (req, res) {
//     var tempPath = req.files.file.path,
//         targetPath = path.resolve('./uploads/image.png');
//     if (path.extname(req.files.file.name).toLowerCase() === '.png') {
//         fs.rename(tempPath, targetPath, function(err) {
//             if (err) throw err;
//             console.log("Upload completed!");
//         });
//     } else {
//         fs.unlink(tempPath, function () {
//             if (err) throw err;
//             console.error("Only .png files are allowed!");
//         });
//     }
//     // ...
// });
// app.get('/image.png', function (req, res) {
//     res.sendfile(path.resolve('./uploads/image.png'));
// });








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

// app.get('/getPayment/:id', function (req, res) {
//
//     console.log("serving getPayment");
//     var single=db.getPayment(req.params.id);
//
//     var payment;
//
//     single.toArray(function(err, items) { //foreach
//         payment=JSON.stringify(items);
//
//         res.send(payment);
//
//     });
//
// });



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

