const {MongoClient, ObjectID} = require('mongodb');
MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client)=>{
  if(err){
    return console.log('unable to connect to mongodb server');
  }
  console.log('Connected to MongoDb server');
  const db = client.db('TodoApp');

  db.collection('Users').findOneAndUpdate({_id : new ObjectID('5bfda5e3fe51b02044a1d635')},
  {$set:{name:'tota'},$inc:{age:1}},{returnOriginal:false}).then((result)=>{
    console.log(result)
  });
  //client.close();
});
