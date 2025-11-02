const { Router } = require('express');
const ensureAuthenticated = require('../middlewares/auth');
const { noteValidation } = require('../middlewares/validations')
const { addNote } = require('../controllers/noteController');

const router = require('express').Router();
router.use(ensureAuthenticated);

router.get('/', (req, res) => {
    res.status(200).json([
        {
            title: "My first note",
            note: "Hello World"
        },
        {
            title: "Items Price",
            note: "TV: 50000, Mobile: 10000"
        }
    ])
})
router.post('/addNote', noteValidation, addNote);

module.exports = router;