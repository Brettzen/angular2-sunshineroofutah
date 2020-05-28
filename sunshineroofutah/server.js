const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
// Port Number
const port = process.env.PORT || 3000
// Run the app by serving the static files
// in the dist directory
app.use(express.static(path.join(__dirname, '/dist/sunshineroofutah')));
// Body Parser Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// For all GET requests, send back index.html
// so that PathLocationStrategy can be used
app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname + '/dist/sunshineroofutah/index.html'));
});

// Start Server
app.listen(port, () => {
    console.log('Server started on port '+port);
  });
