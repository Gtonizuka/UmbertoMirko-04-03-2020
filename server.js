const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes/api');
const fileUpload = require('express-fileupload');
const mongoose = require('mongoose');

// set up express app
const app = express();

// connect to mongodb
mongoose.connect('mongodb://localhost/images');
mongoose.Promise = global.Promise;

app.use(bodyParser.json());

app.use(fileUpload());

// init routes
app.use('/api', routes);

// error handling middleware
app.use((err, req, res, next) => {
  res.status(422).send({ error: err.message });
});

// // listen for requests
app.listen(process.env.port || 4000, () => {
  console.log('now listening for incoming requests');
});

// const express = require('express');
// const fs = require('fs');
// const mongoose = require('mongoose');
// const app = express();
// const router = express.Router();
// const multer = require('multer');

// const storage = multer.diskStorage({
//   destination: function(req, res, cb) {
//     cb(null, 'uploads/');
//   }
// });

// const upload = multer({ storage: storage });

// // connect to mongodb
// mongoose.connect('mongodb://localhost/images');
// mongoose.Promise = global.Promise;

// router
//   .route('/api/files')
//   .post(upload.single('file'), function(req, res) {
//     var new_img = new Img();
//     new_img.img.data = fs.readFileSync(req.file.path);
//     new_img.img.contentType = 'image/jpeg'; // or 'image/png'
//     new_img.save();
//     res.json({ message: 'New image added to the db!' });
//   })
//   .get(function(req, res) {
//     Img.findOne({}, 'img createdAt', function(err, img) {
//       if (err) res.send(err);
//       res.contentType('json');
//       res.send(img);
//     }).sort({ createdAt: 'desc' });
//   });

// app.listen(process.env.port || 4000, () => {
//   console.log('now listening for incoming requests');
// });
