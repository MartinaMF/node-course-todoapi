const {MongoClient, ObiectId} = require('mongodb');
MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client)=>{
  if(err){
    return console.log('unable to connect to mongodb server');
  }
  console.log('Connected to MongoDb server');
  const db = client.db('TodoApp');

  // db.collection('Users').deleteMany({text : 'eat lunch'}).then((result)=>{
  //   console.log(result);
  // });
  // db.collection('Todos').deleteOne({text : 'eat lunch'}).then((result)=>{
  //   console.log(result)
  // });
  db.collection('Todos').findOneAndDelete({completed : false}).then((result)=>{
    console.log(result)
  });
  //client.close();
});
