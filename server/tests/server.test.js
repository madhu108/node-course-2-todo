const expect = require('expect');
const request = require('supertest');

const {app} = require('./../server');
const {Todo} = require('./../models/todo');

beforeEach((done) => {
	Todo.remove({}).then(() => done());
});

describe('POST /todos', () => {
	it('schould create new todo', (done) => {
		var text = 'hare krishna to do test';
		
		request(app)
		.post('/todos')
		.send({text})
		.expect(200)
		.expect((response) => {
			expect(response.body.text).toBe(text);
		})
		.end((err,response) => {
			if(err){
				return done(err);
			};
		Todo.find().then((todos) => {
			expect(todos.length).toBe(1);
			expect(todos[0].text).toBe(text);
			done();
		}).catch((err) => {done(err)});
		});

	});
	
	it('should not pass any todo into db',(done)=> {

		request(app)
		.post('/todos')
		.send({})
		.expect(400)
		.end((error,response) => {
			if(error) return done(error);
			Todo.find().then((todos) => {
				expect(todos.length).toBe(0);
				done();
			}).catch((error) => done(error));
			
		})
	})
	
});