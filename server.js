const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
    res.send('Hello VsCode!');
});

const server = app.listen(PORT, () => {
    console.log(`🚀 SUCCESS: Server is running at http://localhost:${PORT}`);
});

server.on('error', (err) => {
    console.error('❌ SERVER ERROR:', err);
});

module.exports = app; // Export the app for testing