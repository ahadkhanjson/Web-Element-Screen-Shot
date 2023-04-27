const multer = require('multer')

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './Image')
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now() + '_' + Math.round(Math.random() * 1E9)
      cb(null, file.fieldname + '-' + uniqueSuffix+"."+"png")
    }
  })


module.exports= multer({
    storage: storage,
    fileFilter(req, file, cb) {
        if (file.mimetype !== 'image/png' ) {
            return cb(new Error('Only image files are allowed'));
          }
          cb(null, true);
        
    },
})