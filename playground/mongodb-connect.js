//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

//destructuring ES6
//var obj = new ObjectID;
//console.log(obj);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err,db) => {
	if( err ){
		return console.log('Unable to connect to MongoDB server');
	};
	console.log('Conneceted to MongoDb server');
	

	
//destructuring ES6	
//	var user = {name: 'tomas', age: 25};
//	var {name} = user;
//	console.log(name);
	
//	db.collection('ToDos').insertOne({
//		text: 'cook for lunch',
//		completed: false
//	},(err,result) => {
//		if(err){
//			return console.log('Unable to insert To Do',err);
//		};
//		console.log(JSON.stringify(result.ops, undefined,2));
//	});
	
	db.collection('user').insertOne({
		name: 'tomas',
		age: 31,
		location: 'topolcany'
	},(err,result) => {
		if(err){
			return console.log('unable to add user to db',err);
		};
		console.log('user Added succesfuly');
		console.log(JSON.stringify(result.ops[0]._id.getTimestamp() ,undefined,2));
	});
	
	
	db.close();
});

