const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', {useUnifiedTopology: true}, (err, db)=>{
  if (err){
    return console.log('Unable to connect to MongoDB server');
  }
  console.log("Connected to MongoDB server");

  db.collection('Todos').findOneAndDelete({text:'Something'}).then((result) => {
    console.log(result);
  }, (err) => {
    console.log('Unable to delete todos ', err);
  });

  db.close();
})
