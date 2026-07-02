const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get('/api/health', (req, res) => {
    res.json({ status: 'ok', service: 'nyamwaya-website-api' });
});

app.listen(port, () => {
    console.log(`Nyamwaya Website API running on port ${port}`);
});
