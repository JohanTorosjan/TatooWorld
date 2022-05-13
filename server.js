const express = require("express");

const app = express();


app.use(function (req, res, next) {
  // Website you wish to allow to connect
  res.setHeader('Access-Control-Allow-Origin', '*');
  // Request methods you wish to allow
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  // Request headers you wish to allow
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type,Authorization');
  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)      
  res.setHeader('Access-Control-Allow-Credentials', true);
  // Pass to next layer of middleware
  next();
});
// parse requests of content-type - application/json
app.use(express.json());
// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));
// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to tattoworld api." });
});

// set port, listen for requests
const PORT = process.env.PORT || 8096;

require("./routes/get.js")(app);


// TEST For images : 
const bodyParser = require('body-parser');

const multer = require('multer');
var storage = multer.diskStorage({
  destination: function (req, file, cb) {
     cb(null, 'uploads');
  },
  filename: function (req, file, cb) {
     cb(null, Date.now() + '-' + file.originalname);
  }
});
var upload = multer({ storage: storage });

app.post('/api/image-upload', upload.single('image'),(req, res) => {
  const image = req.image;
    res.send(apiResponse({message: 'File uploaded successfully.', image}));
});

function apiResponse(results){
  return JSON.stringify({"status": 200, "error": null, "response": results});
}



app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
  });
