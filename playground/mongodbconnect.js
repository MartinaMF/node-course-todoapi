const {MongoClient, ObiectId} = require('mongodb');
MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client)=>{
  if(err){
    return console.log('unable to connect to mongodb server');
  }
  console.log('Connected to MongoDb server');
  const db = client.db('TodoApp');
  // db.collection('Todos').insertOne({
  //   text:'SomeThing to do',
  //   completed:false
  // },(err,result)=>{
  //   if(err){
  //     return console.log('unable to insert to do');
  //   }
  //   console.log(JSON.stringify(result.ops, undefined, 2));
  // });
  // db.collection('Users').insertOne({
  //   name:'martina',
  //   age:'28',
  //   location:'PA'
  // },(err,result)=>{
  //   if(err){
  //     return console.log();
  //   }
  //   console.log(JSON.stringify(result.ops,undefined, 2));
  // });
  // db.collection('Todos').find({completed : true}).toArray().then((docs)=>{
  //   console.log('Todos');
  //   console.log(JSON.stringify(docs,undefined,2));
  // },(err)=>{
  //   console.log('unable to fetch',err);
  // });
  db.collection('Users').find({name : 'anderew'}).toArray().then((docs)=>{
    console.log(JSON.stringify(docs,undefined,2));
  },(err)=>{
    console.log(err);
  });
  //client.close();
});
