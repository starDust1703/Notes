const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const NoteSchema = new Schema({
    userID: {
        type: String,
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    note: {
        type: String
    }
});

const NoteModel = mongoose.model('notes', NoteSchema);

module.exports = NoteModel;