const express = require('express');
const router = express.Router();

const path = require('path');
const multer = require('multer');

const FileItem = require('../models/FileSchema');

// var Item = new ItemSchema({ img: { data: Buffer, contentType: String } });
// var Item = mongoose.model('Clothes', ItemSchema);

// const storage = multer.diskStorage({
//   destination: './public/uploads/',
//   filename: function(req, file, cb) {
//     cb(null, 'IMAGE-' + Date.now() + path.extname(file.originalname));
//   }
// });

// const upload = multer({
//   storage: storage,
//   limits: { fileSize: 1000000 }
// }).single('myImage');

router.post('/upload', function(req, res) {
  if (!req.files) {
    res.status(400).json({ message: 'Missing uploaded file' });
  } else {
    const { name, data, size } = req.files.imageFe;

    FileItem.create({
      name,
      size
    }).then(foo => {
      console.log('fooo');
      res.send(foo);
    });
  }
});

// get files
router.get('/files', (req, res, next) => {
  // return all items
  FileItem.find({}).then(files => {
    res.send(files);
  });
});

// delete file
router.delete('/files/:id', (req, res, next) => {
  console.log(req.params.id);
  FileItem.findByIdAndRemove({
    _id: req.params.id
  }).then(file => res.send(file));
});

module.exports = router;
