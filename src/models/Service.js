import mongoose from 'mongoose';

const serviceSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, 'Please add a service title'],
    },
    description: {
      type: String,
      required: [true, 'Please add a service description'],
    },
    icon: {
      type: String, // Can be an emoji or icon class
      default: '⚙️',
    },
  },
  {
    timestamps: true,
  }
);

const Service = mongoose.model('Service', serviceSchema);

export default Service;
