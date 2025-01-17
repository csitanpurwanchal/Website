const mongoose = require('mongoose');

const noticeSchema = mongoose.Schema(
  {
    content: { type: String, required: true },
  },
  {
    timestamps: true, // Add createdAt and updatedAt fields automatically
  }
);

const Notice = mongoose.model('Notice', noticeSchema);

module.exports = Notice;
