// const express = require("express");
// var app = express();
const MongoClient = require("mongodb").MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url,function(err,db){
    if(err) throw err;
    var dbo = db.db("bhadvas");
    // dbo.createCollection("studentmarks",function(err,res){
    //     if(err) throw err;
    //     console.log("Collection created!!");
    //     db.close();
    // })
    // dbo.collection("studentmarks").insertMany([{
    //     Name: "Yash", Rollno: 33347, WAD: 91, DSBDA: 75, CC: 100, CNS: 95
    // },
    // {
    //     Name: "Satyajeet", RollNo: 33308, WAD: 90, DSBDA: 80, CC: 95, CNS: 90
    // }
    // ], function(err,res){
        
    //     console.log("2 entry entered successfully");
    //     db.close();
    // })
    // var query = {DSBDA: {$gt:70}}
    var query = {Name: "Satyajeet"}
    var query1 = {$set:{Name: "Nandini", RollNo: 33353}}
    // dbo.collection("studentmarks").find(query).toArray(function(err,res){
    //     if(err) throw err;
    //     console.log(res);
    //     db.close();
    // })
    // dbo.collection("studentmarks").updateMany(query,query1,function(err,res){
    //     if(err) throw err;
    //     console.log("Document updated");
    //     db.close();
    // })
    var query2 = {Name: "Yash"}
    dbo.collection("studentmarks").deleteOne(query2,function(err,res){
        if(err) throw err;
        console.log("Document deleted successfully");
        db.close();
    })
})