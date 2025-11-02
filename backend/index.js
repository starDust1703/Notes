const express = require('express')
const authRouter = require('./routes/authRouter')
const notesRouter = require('./routes/notesRouter')
require('dotenv').config()
require('./models/db')

const app = express()
const PORT = process.env.PORT || 8080;

app.use(express.json());
app.use('/auth', authRouter);
app.use('/notes', notesRouter);

app.listen(PORT, () => {
    console.log(`Notes App listening on port http://localhost:8080`);
});