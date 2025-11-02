const NoteModel  = require('../models/notes')

const addNote = async (req, res) => {
    try {
        const { _id: userID } = req.user;
        const { title, note } = req.body;
        const noteModel = new NoteModel({ userID, title, note });

        await noteModel.save();
        res.status(201)
            .json({
                message: "Note added Successfully",
                success: true 
            })
    } catch (err) {
        res.status(500)
            .json({
                message: "Internal Server Error",
                success: false
            })
    }
}

const deleteNote = async (req, res) => {
    try {
        const { _id: noteID } = req.body;
        await NoteModel.deleteOne({ _id: noteID });
        res.status(201)
            .json({
                message: "Note deleted Successfully",
                success: true 
            })
    } catch (err) {
        res.status(500)
            .json({
                message: "Internal Server Error",
                success: false
            })
    }
};

module.exports = {
    addNote,
    deleteNote
};