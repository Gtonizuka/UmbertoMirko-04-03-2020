const express = require('express');
const router = express.Router();

const FileItem = require('../models/FileSchema');

router.post('/upload', function(req, res, next) {
  if (!req.files) {
    res.status(400).send('Missing uploaded file');
  } else {
    const { name, data, size } = req.files.imageFe;

    // Accept images only
    if (!name.match(/\.(jpg|JPG|jpeg|JPEG|png|PNG)$/)) {
      res.status(400).send('Only images accepted!');
      return;
    }

    const mbSize = size / 1024 / 1024;
    if (mbSize > 10) {
      res.status(400).send('File is too large');
    }

    FileItem.create({
      name,
      size
    })
      .then(file => {
        res.send(file);
      })
      .catch(next);
  }
});

// get files
router.get('/files', (req, res, next) => {
  // return all items
  FileItem.find({})
    .then(files => {
      res.send(files);
    })
    .catch(next);
});

// delete file
router.delete('/files/:id', (req, res, next) => {
  FileItem.findByIdAndRemove({
    _id: req.params.id
  })
    .then(file => res.send(file))
    .catch(next);
});

module.exports = router;
