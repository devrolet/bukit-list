// Find more information at mongoosejs.com/docs/queries

const { ObjectID } = require('mongodb');

const { mongoose } = require('./../server/db/mongoose');
const { Todo } = require('./../server/models/todo');
const { Artist } = require('./../server/models/artist');

// var id = '5be06764f9a4bcceb0d6767a11';

// // Validate ID
// if (!ObjectID.isValid(id)) {
//     console.log('ID not valid');
// }

// Todo.find({
//     _id: id
// }).then((todos) => {
//     console.log('Todos', todos);
// });

// Todo.findOne({
//     _id: id
// }).then((todo) => {
//     console.log('Todo', todo);
// });

// Todo.findById(id).then((todo) => {
//     if (!todo) {
//         return console.log('ID Not Found');
//     }
//     console.log('Todo By Id', todo);
// }).catch((e) => console.log(e));

Artist.findById('5be0515ce3380fa6d031dd79').then((artist) => {
    if (!artist) {
        return console.log('Unable to find artist');
    }

    console.log(JSON.stringify(artist, undefined, 2));
}, (e) => {
    console.log(e);
});