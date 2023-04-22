const { mongoose } = require('../db/connection');

const animesSchema = new mongoose.Schema({
    name: String,
    type: String,
    episodes: String
}, {timestamps: true})

const Anime = mongoose.model('Anime', animeSchema)

module.exports = Anime;