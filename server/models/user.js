var mongoose = require('mongoose');

var user = mongoose.model('user',{
	email:{
		type:String,
		required: true,
		trim:true,
		minlength:1
	}
});

//var user1 = new user({
//	email:'tomascode108@gmail.com'
//});
//
//user1.save().then((doc) => {
//	console.log('New user saved:',doc)
//},(err) => {
//	console.log('Unable to add user',err);
//});

module.exports = {user};
