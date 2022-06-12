const mongoose = require('mongoose');
const { schema } = require('./Celebrity.model');
const { Schema } = mongoose;

const movieSchema = new Schema({
    title: String,
    genre: String,
    plot: String,
    cast: {

        type: [Schema.Types.ObjectId],
        ref: 'Celebrity'
    }
})

const Movie = mongoose.model('Movie.model', movieSchema);
module.exports = Movie