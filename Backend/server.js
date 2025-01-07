// Initialize the server and listen to the port 3000
const http = require('http');
const app = require('./app');

// Set the port to the environment variable PORT or 3000
const port = process.env.PORT || 3000;

// Create the server
const server = http.createServer(app);

// Listen to the port
server.listen(port, () => {
console.log(`Server is running on http://localhost:${port}`);
});


