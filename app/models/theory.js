// Requiring the mongoose module and creating the mongoose schema
const mongoose = require('mongoose'),
	Schema = mongoose.Schema;

// create schemas
// schema for each individual theory show.
const showSchema = new Schema({
show: String
});

// schema for each theory.
const  theorySchema = new Schema({
	title: String,
	description: String,
	show: [showSchema]
	
});

// create model
const theoryModel = mongoose.model('Theory', theorySchema);


// export the model
module.exports = theoryModel;

