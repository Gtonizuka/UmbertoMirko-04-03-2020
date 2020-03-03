const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const FileSchema = new Schema({
  name: {
    type: String,
    required: [true, 'Name field is required']
  },
  size: {
    type: Number,
    required: [true, 'Size field is required']
  },
  img: { data: Buffer }
});

const FileItem = mongoose.model('fileItem', FileSchema);

module.exports = FileItem;
