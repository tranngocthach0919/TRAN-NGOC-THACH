import mongoose, { Schema, Document } from 'mongoose';

export interface IResource extends Document {
  name: string;
  description: string;
  category: string;
  price: number;
  isAvailable: boolean;
  createdAt: Date;
  updatedAt: Date;
}

const ResourceSchema: Schema = new Schema({
  name: { type: String, required: true, trim: true },
  description: { type: String, required: true },
  category: { type: String, required: true },
  price: { type: Number, required: true, min: 0 },
  isAvailable: { type: Boolean, default: true },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});

ResourceSchema.pre<IResource>('save', function(next) {
  this.updatedAt = new Date();
  next();
});

export default mongoose.model<IResource>('Resource', ResourceSchema);