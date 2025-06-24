// Import dependencies.
import mongoose from 'mongoose';
import 'dotenv/config';

// debugger start
debugger;

// Connect based on the .env file parameters.
mongoose.connect(
    process.env.MONGODB_CONNECT_STRING,
    { useNewUrlParser: true }
);
const db = mongoose.connection;

// Confirm that the database has connected and print a message in the console.
db.once("open", (err) => {
    if(err){
        res.status(500).json({ error: '500:Connection to the server failed.' });
    } else  {
        console.log('Successfully connected to MongoDB Stock Options Trades collection using Mongoose.');
    }
});

// SCHEMA: Define the collection's schema.
const movieSchema = mongoose.Schema({
    stckUndly:  { type: String, required: true },
    numContrt:  { type: Number, required: true, default: 1 },
    expDate:    { type: Date, required: true , min: '1900-01-01', default: Date.now},
    strtDate:   { type: Date, required: true, min: '1900-01-01', default: Date.now },
	exitDate:   { type: Date, required: false, min: '1900-01-01', default: Date.now },
});

// Compile the model from the schema.
const Movie = mongoose.model('Movie', movieSchema);


// CREATE model *****************************************
const createMovie = async (stckUndly, numContrt, expDate, strtDate, exitDate) => {
    const movie = new Movie({ 
        stckUndly: stckUndly,
        numContrt: numContrt,
        expDate: expDate,
        strtDate: strtDate,
        exitDate: exitDate, 
    });
    return movie.save();
}


// RETRIEVE models *****************************************
// Retrieve based on a filter and return a promise.
const retrieveMovies = async () => {
    const query = Movie.find();
    return query.exec();
}

// RETRIEVE by ID
const retrieveMovieByID = async (_id) => {
    const query = Movie.findById({_id: _id});
    return query.exec();
}

// DELETE model based on _id  *****************************************
const deleteMovieById = async (_id) => {
    const result = await Movie.deleteOne({_id: _id});
    return result.deletedCount;
};


// UPDATE or REPLACE model ********************************************
const updateMovie = async (_id, stckUndly, numContrt, expDate, strtDate, exitDate) => {
    const result = await Movie.replaceOne({_id: _id }, {
        stckUndly: stckUndly,
        numContrt: numContrt,
        expDate: expDate,
        strtDate: strtDate,
        exitDate: exitDate, 
    });
    return { 
        _id: _id, 
        stckUndly: stckUndly,
        numContrt: numContrt,
        expDate: expDate,
        strtDate: strtDate,
        exitDate: exitDate, 
    }
}



// Export our variables for use in the controller file.
export { createMovie, retrieveMovies, retrieveMovieByID, updateMovie, deleteMovieById }