import mongoose from 'mongoose'

const connectDB = (): void => {
  if (mongoose.connections[0].readyState) {
    console.log('connected')
    return
  }

  mongoose.connect(process.env.MONGO_URI, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
}

export default connectDB
