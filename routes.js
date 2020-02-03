exports.index = function(req, res) {
	res.render("index", { 
		// Template data
		title: "Express" 
	});
};


exports.hello = function(req, res) {
	var _         = require("underscore");
	var mdbClient = require('mongodb').MongoClient;
	
	mdbClient.connect("mongodb://localhost:27017/osf_project", {native_parser: true}, (err, db) => {
		const collection = db.collection('categories');
		console.log(collection);
		
		collection.find().toArray(function(err, items) {
			res.render("hello", { 
				// Underscore.js lib
				_     : _, 
				
				// Template data
				title : "Hello World!",
				items : items
			});

			db.close();
		});
	});
};