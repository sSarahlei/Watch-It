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
app.get('/login',function(req,res){
    res.sendFile(path.join(dirCustomer,'/login.html'));
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
app.get('/single',function(req,res){
    res.sendFile(path.join(dirCustomer,'/single.html'));
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
