import mongoose, { Schema } from 'mongoose'

const reloadSchema = new Schema({
  refillCount: {type: Number, default: 0},
  timeUsage: {type: Number, default: 0},
  endDate: {type: Date, default: null}
}, { timestamps: true })

reloadSchema.methods = {
  view (full) {
    const view = {
      // simple view
      id: this.id,
      refillCount: this.refillCount,
      timeUsage: this.timeUsage,
      endDate: this.endDate,
      createdAt: this.createdAt
    }

    return full ? {
      ...view,
      updatedAt: this.updatedAt
      // add properties for a full view
    } : view
  }
}

const model = mongoose.model('Reload', reloadSchema)

export const schema = model.schema
export default model
