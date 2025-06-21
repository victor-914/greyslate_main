require('dotenv').config();
const express = require("express");
const path = require("path");

const app = express()

const PORT = 8000

// Configure Cloudinary
app.use(express.static(path.join(__dirname)));

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
