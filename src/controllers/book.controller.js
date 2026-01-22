const Book = require('../models/book.model')

exports.getAllBooks = async (req , res) => {
    try {
        const books = await Book.getAll() // goi ham model
        res.render('home', {books})
    }catch (error) {
        console.error(error)
        res.status(500).send('Loi khi lay du lieu sach')
    }
}

// hien thi form them sach
exports.getAddBook = (req , res) => {
    res.render('add-book')
}

exports.postAddBook = async (req , res) => {
    try {
        const {title , author , description} = req.body
        const image_url = req.file ? req.file.filename : 'default-book.jpg'
        await Book.create({title, author, description, image_url})
        res.redirect('/')
    }catch (error) {
        console.error(error)
        res.status(500).send('loi khi them sach')
    }
}
