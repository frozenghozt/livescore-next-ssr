const withImages = require('next-images')

module.exports = withImages({
  esModule: true,
  env: {
    MONGO_URI:
      'mongodb+srv://frozen:sabesbem1234@livescore.qp2gf.mongodb.net/<dbname>?retryWrites=true&w=majority'
  }
})
