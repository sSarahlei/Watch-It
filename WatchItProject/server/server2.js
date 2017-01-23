/**
 * Created by Tzofia on 12/01/2017.
 */
var express = require('express');
var app = express();
var path = require('path');

var dirCustomer=path.join(__dirname, '../client/customer/views');
var dirControllers=path.join(__dirname, '../client/customer/controllers');
var dirJs=path.join(__dirname, '../public');

app.use(express.static(dirCustomer));
app.use(express.static(dirControllers));
app.use(express.static(dirJs));
var db=require('./db.js');





app.listen(3000, function () {
    console.log("server running at port 3000!");

});
//companies



//tzofia

app.get('/getCompanies', function (req, res) {
    console.log("serving getCompanies");
    var arr=db.getAllCompanies();

    var arrComp;

    arr.toArray(function(err, items) { //foreach
        arrComp=JSON.stringify(items);
        res.send(arrComp);

    });


});
app.get('/',function(req,res){
    res.sendFile(path.join(dirCustomer,'/index.html'));
    //__dirname : It will resolve to your project folder.
});

app.get('/404',function(req,res){

    res.sendFile(path.join(dirCustomer,'/404.html'));
    //__dirname : It will resolve to your project folder.
});
app.get('/about',function(req,res){

    res.sendFile(path.join(dirCustomer,'/about.html'));
    //__dirname : It will resolve to your project folder.
});
app.get('/brands',function(req,res){
    res.sendFile(path.join(dirCustomer,'/brands.html'));
    //__dirname : It will resolve to your project folder.
});
app.get('/checkout',function(req,res){
    res.sendFile(path.join(dirCustomer,'/checkout.html'));
    //__dirname : It will resolve to your project folder.
});
app.get('/contact',function(req,res){
    res.sendFile(path.join(dirCustomer,'/contact.html'));
    //__dirname : It will resolve to your project folder.
});
app.get('/home',function(req,res){
    res.sendFile(path.join(dirCustomer,'/home.html'));
    //__dirname : It will resolve to your project folder.
});
app.get('/legall',function(req,res){
    res.sendFile(path.join(dirCustomer,'/legall.html'));
    //__dirname : It will resolve to your project folder.
});
app.get('/loginClient',function(req,res){
    res.sendFile(path.join(dirCustomer,'/loginClient.html'));
    //__dirname : It will resolve to your project folder.
});
app.get('/men',function(req,res){
    res.sendFile(path.join(dirCustomer,'/men.html'));
    //__dirname : It will resolve to your project folder.
});
app.get('/order',function(req,res){
    res.sendFile(path.join(dirCustomer,'/order.html'));
    //__dirname : It will resolve to your project folder.
});

app.get('/register',function(req,res){
    res.sendFile(path.join(dirCustomer,'/register.html'));
    //__dirname : It will resolve to your project folder.
});
app.get('/single/:id',function(req,res){
    console.log('serving single');

    res.sendFile(path.join(dirCustomer,'/single.html'),req.params.id);
    //__dirname : It will resolve to your project folder.
});
app.get('/whatsNew',function(req,res){
    res.sendFile(path.join(dirCustomer,'/whatsNew.html'));
    //__dirname : It will resolve to your project folder.
});
app.get('/woman',function(req,res){
    res.sendFile(path.join(dirCustomer,'/woman.html'));
    //__dirname : It will resolve to your project folder.
});
app.get('/cart/:id',function(req,res){
    res.sendFile(path.join(dirCustomer,'/cart.html'));
    //__dirname : It will resolve to your project folder.
});
app.get('/comparison/:id',function(req,res){
    res.sendFile(path.join(dirCustomer,'/comparison.html'));
    //__dirname : It will resolve to your project folder.
});
app.get('/getWatchesMen', function (req, res) {
    console.log("serving getWatches");
    var arr=db.getWatchesMen();

    var arrWatches;

    arr.toArray(function(err, items) { //foreach
        arrWatches=JSON.stringify(items);
        res.send(arrWatches);

    });



});
app.get('/getWatchesWomen', function (req, res) {
    console.log("serving getWatchesWomen");
    var arr=db.getWatchesWomen();

    var arrWatches;

    arr.toArray(function(err, items) { //foreach
        arrWatches = JSON.stringify(items);
        res.send(arrWatches);
    });
});
app.get('/getSingle/:id', function (req, res) {
    console.log("serving getSingle");


    var single=db.getWatchSingle(req.params.id);

    var watch;

    single.toArray(function(err, items) { //foreach
        watch=JSON.stringify(items);
        console.log(items);
        res.send(watch);

    });


});
app.get('/getWatchesOrdering/:id', function (req, res) {
    console.log("serving getWatchesOrdering");


    var single=db.getWatchSingle(req.params.id);

    var watch;

    single.toArray(function(err, items) { //foreach
        watch=JSON.stringify(items);
        console.log(items);
        res.send(watch);

    });


});
app.post('/signing', function (req, res) {
    alert("in signing!");
    var existUser = new User(req.body);

    console.log("In sign in :",existUser);

    if(req.session.user != null)
    {
        res.json({ in: false, msg: "הנך מחובר! התנתק לפני התחברות חוזרת", user: null });
    }
    else
    {
        User.findOne({  name: existUser.name}, function (err, user) {
            if (user) {

                if(user.password != existUser.password)
                {
                    res.json({ in: false, msg: "הסיסמא שהכנסת שגויה", user: user });
                }
                else
                {
                    req.session.user = user;
                    res.json({ in: true, msg: "התחברת לשעון בקטלוג בהצלחה", user: user });
                }

            }
            else {
                res.json({ in: false, msg: "שם המשתמש אינו קיים בשעון בקטלוג", user: user });

            }
        });
    }
});
