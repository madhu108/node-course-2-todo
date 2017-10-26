//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err,db) => {
	if( err ){
		return console.log('Unable to connect to MongoDB server');
	};
	console.log('Conneceted to MongoDb server');
	
//	db.collection('ToDos').find({_id: new ObjectID('59f07ca483cc91f3d81737ca')}).toArray().then((docs) => {
//		console.log('ToDos:');
//		console.log(JSON.stringify(docs, undefined, 2))
//	},(err) => {
//		console.log('Unable to fetch data',err);
//	})
	
	db.collection('ToDos').find().count().then((count) => {
		console.log(`ToDos count: ${count}`);
	},(err) => {
		console.log('Unable to fetch data',err);
	})
	
//	db.collection('user').find({name:'tomas'}).toArray().then((doc) => {
//		console.log('search for name...');
//		console.log(JSON.stringify(doc, undefined, 2));
//	}, (err) => {
//		console.log('unable to fetch data',err);
//	});

	
	
//	db.closes();	
});

