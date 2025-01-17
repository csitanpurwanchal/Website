const Notice = require("../models/Notice");

// Get all notices
exports.getAllNotices = async (req, res) => {
  try {
    const notices = await Notice.find();
    res.status(200).json(notices);
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
};

// Create a new notice
exports.createNotice = async (req, res) => {
  try {
    const { title, description } = req.body;
    const newNotice = new Notice({
      title,
      description,
    });
    await newNotice.save();
    res.status(201).json(newNotice);
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
};

// Update an existing notice
exports.updateNotice = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, description } = req.body;
    const updatedNotice = await Notice.findByIdAndUpdate(
      id,
      { title, description },
      { new: true }
    );
    if (!updatedNotice) {
      return res.status(404).json({ message: "Notice not found" });
    }
    res.status(200).json(updatedNotice);
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
};

// Delete a notice
exports.deleteNotice = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedNotice = await Notice.findByIdAndDelete(id);
    if (!deletedNotice) {
      return res.status(404).json({ message: "Notice not found" });
    }
    res.status(200).json({ message: "Notice deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
};
