//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err,db) => {
	if( err ){
		return console.log('Unable to connect to MongoDB server');
	};
	console.log('Conneceted to MongoDb server');
	
//	db.collection('ToDos').findOneAndUpdate({_id:ObjectID('59f09d1883cc91f3d8173db9')},{$set:{completed:true}},{returnOriginal:false}).then((result) => console.log(result));
	
//	db.collection('user').findOneAndUpdate({_id:ObjectID('59ef769fbda2d925e2ad8a55')},{$set:{name:'vlado'}},{returnOriginal:false}).then((result) => console.log(result));
	
	db.collection('user').findOneAndUpdate({_id:ObjectID('59ef769fbda2d925e2ad8a55')},{$set:{name:'palislav'},$inc:{age:-15}},{returnOriginal:false}).then((result) => console.log(result));
	
//	db.close();	
});

