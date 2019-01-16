// Find more information at mongoosejs.com/docs/queries

const { ObjectID } = require('mongodb');

const { mongoose } = require('./../server/db/mongoose');
const { Todo } = require('./../server/models/todo');
const { Artist } = require('./../server/models/artist');

// Todo.remove({}).then((result) => {
//     console.log(result);
// });

// Todo.findOneAndRemove
// Todo.findByIdAndRemove

Todo.findByIdAndRemove('5be31d181b1b68e0c16be703').then((todo) => {
    console.log(todo);
});