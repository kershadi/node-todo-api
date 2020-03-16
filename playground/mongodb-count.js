const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', {useUnifiedTopology: true}, (err, db)=>{
  if (err){
    return console.log('Unable to connect to MongoDB server');
  }
  console.log("Connected to MongoDB server");

  db.collection('Todos').find().count().then((count) => {
    console.log(`Todos count is ${count}`);
  }, (err) => {
    console.log('Unable to fetch todos counts', err);
  });

  db.close();
})
