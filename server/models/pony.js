const { gql } = require('apollo-server');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ponySchema = new Schema({
    name: String,
    age: Number,
    id: String
})

module.exports = mongoose.model('Pony', ponySchema);