const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', {useUnifiedTopology: true}, (err, db)=>{
  if (err){
    return console.log('Unable to connect to MongoDB server');
  }
  console.log("Connected to MongoDB server");

  db.collection('Todos').findOneAndUpdate
    (
      {
        _id: new ObjectID('5e6efd512894c66d08562ab2')
      },
      {
        $set: {
          completed: true
        }
      },
      {
        returnOriginal: false
      }
    ).then ((result) => {
      console.log(result);
    });

  db.close();
})
