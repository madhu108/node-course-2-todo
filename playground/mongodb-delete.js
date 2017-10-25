//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err,db) => {
	if( err ){
		return console.log('Unable to connect to MongoDB server');
	};
	console.log('Conneceted to MongoDb server');
	
//	deleteMany
//	db.collection('ToDos').deleteMany({text: 'eat dinner'}).then((result) => {
//		console.log(result);
//	});
	
//	deleteOne
//	db.collection('ToDos').deleteOne({text: 'eat dinner'}).then((result) => {
//		console.log(result);
//	});

//	findOneAndDelete
//	db.collection('ToDos').findOneAndDelete({completed: false}).then((result) => {
//		console.log(result);
//	});
	
	db.collection('user').deleteMany({name:'tomas'}).then((result) => {
		console.log(result);
	});
	
//	db.collection('user').deleteOne({_id: ObjectID("59ef767dd1390c25c425de42")}).then((result) => {
//		console.log(result);
//	});
	
	
	db.close();	
});

