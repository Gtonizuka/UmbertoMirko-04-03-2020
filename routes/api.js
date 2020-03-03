const express = require('express');
const router = express.Router();

const FileItem = require('../models/FileSchema');

router.post('/upload', function(req, res) {
  if (!req.files) {
    res.status(400).json({ message: 'Missing uploaded file' });
  } else {
    const { name, data, size } = req.files.imageFe;

    FileItem.create({
      name,
      size
    }).then(file => {
      res.send(file);
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
  FileItem.findByIdAndRemove({
    _id: req.params.id
  }).then(file => res.send(file));
});

module.exports = router;
