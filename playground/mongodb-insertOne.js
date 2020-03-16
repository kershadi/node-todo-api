const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', {useUnifiedTopology: true}, (err, db)=>{
  if (err){
    return console.log('Unable to connect to MongoDB server');
  }
  console.log("Connected to MongoDB server");

  db.collection("Todos").insertOne({
      text: 'Somthing to do',
      completed: false
  },(error, result)=>{
    if (error){
      return console.log('Unbale to insert todo', err);
    }
    console.log(JSON.stringify(result.ops, undefined, 2));
  })

  db.collection("Users").insertOne({
      name: 'Kouros Ershadi',
      age: 50,
      location: '1 Northglen Ave., Toronto ON M9B-4R3'
  },(error, result)=>{
    if (error){
      return console.log('Unbale to insert user', err);
    }
    console.log(JSON.stringify(result.ops[0]._id.getTimestamp(), undefined, 2));
  })

  db.close();
})
