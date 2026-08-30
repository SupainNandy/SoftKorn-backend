import mongoose from 'mongoose';

const aboutSchema = mongoose.Schema(
  {
    mission: {
      type: String,
      required: true,
    },
    story: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const About = mongoose.model('About', aboutSchema);

export default About;
