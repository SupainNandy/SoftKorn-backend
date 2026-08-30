import About from '../models/About.js';

// @desc    Get about info
// @route   GET /api/about
// @access  Public
export const getAbout = async (req, res) => {
  try {
    const about = await About.findOne();
    res.status(200).json(about || { mission: 'Default Mission', story: 'Default Story' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Update about info
// @route   PUT /api/about
// @access  Private/Admin
export const updateAbout = async (req, res) => {
  try {
    let about = await About.findOne();
    if (about) {
      about.mission = req.body.mission || about.mission;
      about.story = req.body.story || about.story;
      const updatedAbout = await about.save();
      res.status(200).json(updatedAbout);
    } else {
      about = await About.create(req.body);
      res.status(201).json(about);
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
