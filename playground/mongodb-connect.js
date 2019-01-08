//const MongoClient = require("mongodb").MongoClient;
//Exactly as the code below
//Using Destructuring

const  {MongoClient,ObjectID} = require("mongodb"); // Exactly the same as the code above
var ObjID = new ObjectID();
console.log(ObjID);

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,client)=>{

    if (err) {
       return console.log("Unable to connect to mongo server");

    }
    console.log("Succesfully connected to the MongoDB server");

    const db = client.db("TodoApp");

    // db.collection("Todos").insertOne({task:"Walk the dog",time:"18:00"},(err,result)=>{
    //     if (err) {
    //         return console.log("Unable to insert todo");
    //     }
    //     console.log(JSON.stringify(result.ops,undefined,2));
    //
    // });
    //
    // db.collection("Users").insertOne({name:"Pepe",age:"28"},(err,result)=>{
    //     if (err){
    //         return console.log("Unable to instert todo");
    //     }
    //     console.log(JSON.stringify(result.ops,undefined,2));
    // })



    client.close();
});


