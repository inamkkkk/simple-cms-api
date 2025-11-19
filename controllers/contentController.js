const Content = require('../models/Content');

exports.getAllContent = async (req, res, next) => {
  try {
    const content = await Content.find();
    res.json(content);
  } catch (error) {
      next(error);
  }
};

exports.getContentById = async (req, res, next) => {
  try {
    const content = await Content.findById(req.params.id);
    if (!content) {
      return res.status(404).json({ message: 'Content not found' });
    }
    res.json(content);
  } catch (error) {
      next(error);
  }
};

exports.createContent = async (req, res, next) => {
  try {
    const content = new Content(req.body);
    await content.save();
    res.status(201).json(content);
  } catch (error) {
      next(error);
  }
};

exports.updateContent = async (req, res, next) => {
  try {
    const content = await Content.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!content) {
      return res.status(404).json({ message: 'Content not found' });
    }
    res.json(content);
  } catch (error) {
      next(error);
  }
};

exports.deleteContent = async (req, res, next) => {
  try {
    const content = await Content.findByIdAndDelete(req.params.id);
    if (!content) {
      return res.status(404).json({ message: 'Content not found' });
    }
    res.status(204).send();
  } catch (error) {
      next(error);
  }
};