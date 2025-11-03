const express = require('express')
const authRouter = require('./routes/authRouter')
const notesRouter = require('./routes/notesRouter')
const cors = require('cors')
require('dotenv').config()
require('./models/db')

const app = express()
const PORT = process.env.PORT || 8080;

app.use(cors());
app.use(express.json());
app.use('/', authRouter);
app.use('/notes', notesRouter);

app.listen(PORT, () => {
    console.log(`Notes App listening on port http://localhost:8080`);
});