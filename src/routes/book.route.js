const express = require('express')
const router = express.Router()
const bookController = require('../controllers/book.controller')
const path = require('path')
const multer = require('multer')
const storage = multer.diskStorage({
    destination: (req , file , cb) => {
        cb(null, path.join(__dirname, '../public/img'))
    },
    filename: (req , file , cb) => {
        cb(null , Date.now() + '-' + file.originalname)
    }
})
const upload = multer({storage: storage})

router.get('/', bookController.getAllBooks)
router.get('/add', bookController.getAddBook)
router.post('/add', upload.single('image'), bookController.postAddBook)

module.exports = router 