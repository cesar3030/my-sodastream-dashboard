import mongoose, { Schema } from 'mongoose'
import { Reload } from '../reload'

const refillSchema = new Schema({
  elapsedTime: {
    type: Number
  },
  reload: { type: Schema.Types.ObjectId, ref: 'Reload'}
}, {
  timestamps: true,
  toJSON: {
    virtuals: true,
    transform: (obj, ret) => { delete ret._id }
  }
})

refillSchema.methods = {
  view (full) {
    const view = {
      // simple view
      id: this.id,
      elapsedTime: this.elapsedTime,
      createdAt: this.createdAt,
      reload: this.reload
    }

    return full ? {
      ...view,
      updatedAt: this.updatedAt
    } : view
  }
}


refillSchema.pre('save', function(next) {
  // Find the latest reload
  Reload.findOne()
    .sort({ field: 'asc', _id: -1 })
    .limit(1)
    .then((reload) => {
      if(reload) {
        // Add reload id to the refill
        this.reload = reload._id;
        
        // Update reload stats
        reload.timeUsage = reload.timeUsage + this.elapsedTime,
        reload.refillCount = reload.refillCount + 1
        reload.save()
      }
      next();
    })
    .catch(() => next())
});

const model = mongoose.model('Refill', refillSchema)

export const schema = model.schema
export default model
