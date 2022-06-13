const mongoose = require('mongoose');
// const { Schema } = require('./Celebrity.model');
const { Schema } = mongoose;

const movieSchema = new Schema({
    title: String,
    genre: String,
    plot: String,
    cast: {

        type: [Schema.Types.ObjectId],
        ref: 'Celebrity.model',
    }
})

const Movie = mongoose.model('Movie.model', movieSchema);

module.exports = Movie;