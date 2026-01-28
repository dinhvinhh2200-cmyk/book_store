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
router.get('/admin', bookController.getAdminBooks)
router.get('/admin/delete/:id', bookController.postSoftDelete)
router.get('/admin/restore/:id', bookController.postRestore)
// route hien thi form
router.get('/edit/:id', bookController.getEditBook)
// route xu ly cap nhap
router.post('/edit/:id', upload.single('image'), bookController.postEditBook)
// router chi tiet sach
router.get('/book/:id', bookController.getBookDetail)

module.exports = router 