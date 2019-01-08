const  {MongoClient, ObjectID} = require("mongodb");


MongoClient.connect("mongodb://localhost:27017/TodoApp",(err, client)=>{
   if (err) {
       return console.log(err);
   }

   const db  = client.db("TodoApp");

    // db.collection("Todos").find({task:"Walk the dog"}).toArray().then((docs)=>{
    //     console.log("Todos");
    //     console.log(JSON.stringify(docs,undefined,2));
    // },(err)=>{
    //     console.log("Unable to fetch todo", err);
    // });

    db.collection("Todos").find({name:"Pepe"}).toArray().then((docs)=>{
        console.log(JSON.stringify(docs,undefined,2));

    },(err)=>{
        console.log("Something went wrong", err);
    });
   client.close();
});

