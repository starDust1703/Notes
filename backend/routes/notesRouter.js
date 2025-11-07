const ensureAuthenticated = require('../middlewares/auth');
const { noteValidation } = require('../middlewares/validations')
const { addNote } = require('../controllers/noteController');
const NoteModel = require('../models/notes');

const router = require('express').Router();
router.use(ensureAuthenticated);

router.get('/', async (req, res) => {
  try {
    const userID = req.user._id;
    const notes = await NoteModel.find({ userID: userID });
    res.status(200).json(notes);
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error", error });
  }
});

router.get('/:id', async (req, res) => {
  try {
    const noteID = req.params.id;

    const note = await NoteModel.findById(noteID);
    if (!note) {
      return res.status(404).json({ message: "Note Not Found" });
    }
    res.status(200).json(note);
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error", error });
  }
});

router.put('/:id', async (req, res) => {
  try {
    const noteID = req.params.id;
    const updateData = req.body;

    const updatedNote = await NoteModel.findByIdAndUpdate(noteID, updateData, { new: true });

    if (!updatedNote) {
      return res.status(404).json({ message: "Note Not Found" });
    }

    res.status(200).json({ message: "Note Updated Successfully", note: updatedNote });
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const noteID = req.params.id;
    await NoteModel.findByIdAndDelete(noteID);
    res.status(200).json({ message: "Note Deleted Successfully" });
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error", error });
  }
});

router.post('/addNote', noteValidation, addNote);

module.exports = router;