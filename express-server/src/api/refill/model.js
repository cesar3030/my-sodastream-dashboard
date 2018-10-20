import mongoose, { Schema } from 'mongoose'

const refillSchema = new Schema({
  elapsedTime: {
    type: Number
  }
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
      createdAt: this.createdAt
    }

    return full ? {
      ...view,
      updatedAt: this.updatedAt
    } : view
  }
}

const model = mongoose.model('Refill', refillSchema)

export const schema = model.schema
export default model
