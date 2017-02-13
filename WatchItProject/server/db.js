/**
 * Created by Tmura on 03/01/2017.
 */
var DB;
var mongodb=require('mongodb');
// connect to database
var MongoClient = require('mongodb').MongoClient;
var assert = require("assert");
//unit tests
// for local db
//var url = 'mongodb://localhost:27017/dbWatch';
var url = "mongodb://shaonbacatalog:123abc@ds149207.mlab.com:49207/watchit";
MongoClient.connect(url, function(err, db) {
    assert.equal(null, err);
    //assert unit test
    console.log("Connected correctly to server.");


    if(err) { return console.log(err); } //handling errors


    //
    DB=db;
    //db.close();
});



module.exports={
    //companies
    getAllCompanies:function() {
        return DB.collection('companies').find({});
    },
    deleteCompany:function(id){

        DB.collection('companies').deleteOne({_id:new mongodb.ObjectID(id)});
            console.log("Removed document");
            return DB.collection('companies').find({});



    },
    updateCompany:function(id,field_to_edit) {
        DB.collection('companies').updateOne(id,{$set:field_to_edit});
        console.log("updated document");
        return DB.collection('companies').find({});

    },
    updateWatch:function(id,field_to_edit) {
        DB.collection('watches').updateOne(id,{$set:field_to_edit});
        console.log("updated watch");
        return DB.collection('watches').find({});

    },
    //orders
    getAllOrders:function() {
        return DB.collection('orders').find({});
    },

    getOldOrders:function() {
        return DB.collection('orders').find({status:"4"});
    },
    deleteOrder:function(id){

        DB.collection('orders').deleteOne({_id:new mongodb.ObjectID(id)});
        console.log("Removed document");
        return DB.collection('orders').find({});



    },
    //watches
    getAllWatches:function() {

        return DB.collection('watches').find({});
    },
    getAllTypes:function() {

        return DB.collection('types').find({});
    },

    getWatchesMen:function() {

        return DB.collection('watches').find({"category":"1","inStock":"true"});
    },
    getWatchesWomen:function() {

        return DB.collection('watches').find({"category":"2","inStock":"true"});
    },
    getStatuses:function() {

        return DB.collection('statuses').find({});
    },
    deleteWatches:function(id){

        DB.collection('watches').deleteOne({_id:new mongodb.ObjectID(id)});
        console.log("Removed document");
        return DB.collection('watches').find({});



    },
    getWatchSingle:function(id){

        return DB.collection('watches').find({_id:new mongodb.ObjectID(id)});
    },
    // getPayment:function(id){
    //
    //     return DB.collection('payments').find({_id:new mongodb.ObjectID(id)});
    // },
    getAllUsers:function() {
        return DB.collection('users').find({});
    },
    insertCompany:function(document){


        DB.collection('companies').insertOne(document);
        console.log("Inserted document");
        return DB.collection('companies').find({});



    },
    insertWatch:function(document){


        DB.collection('watches').insertOne(document);
        console.log("Inserted Watch");
        return DB.collection('watches').find({});



    },
    insertOrder:function(document){


        DB.collection('orders').insertOne(document);
        console.log("Inserted Order");
        return DB.collection('orders').find({});



    }


}
