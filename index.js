const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const dbConnection = require('./config/db');
const doctorRoutes = require('./routes/doctor.routes');
const hospitalRoutes = require('./routes/hospital.routes');
const nurseRoutes = require('./routes/nurse.routes');
const loginRoutes = require('./routes/login.routes');
const patientRoutes = require('./routes/patient.routes');
const wardRoutes = require('./routes/ward.routes');
const inventory = require('./routes/inventory.routes');
const adminRoutes = require('./routes/admin.routes');

const app = express();
app.use(cors());
app.use(express.json({extended: false}));
dotenv.config();

app.get('/', (req, res) => res.send('Hello World!'));

// Connect to database
dbConnection();

// Define routes
app.use('/.netlify/functions/api/doctor', doctorRoutes);
app.use('/.netlify/functions/api/hospital', hospitalRoutes);
app.use('/.netlify/functions/api/nurse', nurseRoutes);
app.use('/.netlify/functions/api/login', loginRoutes);
app.use('/.netlify/functions/api/patient', patientRoutes);
app.use('/.netlify/functions/api/ward', wardRoutes);
app.use('/.netlify/functions/api/inventory', inventory);
app.use('/.netlify/functions/api/admin', adminRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));