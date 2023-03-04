const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const dbConnection = require('./config/db');


const app = express();
app.use(cors());
app.use(express.json({extended: false}));
dotenv.config();

app.get('/', (req, res) => res.send('Hello World!'));

// Connect to database
dbConnection();

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));