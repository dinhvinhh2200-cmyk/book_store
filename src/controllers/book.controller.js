const Book = require('../models/book.model')

exports.getAllBooks = async (req , res) => {
    try {
        const books = await Book.getAllActive() // goi ham model
        res.render('home', {books})
    }catch (error) {
        console.error(error)
        res.status(500).send('Loi khi lay du lieu sach')
    }
}

exports.getAdminBooks = async (req , res) => {
    try {
        const books = await Book.getAllForAdmin()
        res.render('admin/list-books', { books })
    }catch (error) {
        console.error(error)
        res.status(500).send('loi khi lay du lieu sach')
    }
}

// hien thi form them sach
exports.getAddBook = (req , res) => {
    res.render('admin/add-book')
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

// xoa men
exports.postSoftDelete = async (req , res) => {
    await Book.softDelete(req.params.id)
    res.redirect('/admin')
}

// khoi phuc
exports.postRestore = async (req , res) => {
    await Book.restore(req.params.id)
    res.redirect('/admin')
}

// hiển thị form sửa
exports.getEditBook = async (req , res) => {
    try {
        const book = await Book.getById(req.params.id)
        res.render('admin/edit-book', {book})
    }catch (error) {
        console.error(error)
        res.status(500).send('loi khi lay thong tin sach')
    }
}

// xử lý cập nhập thông tin
exports.postEditBook = async (req , res) => {
    try {
        const { title , author , description} = req.body
        const book = await Book.getById(req.params.id)

        const image_url = req.file ? req.file.filename : book.image_url

        await Book.update(req.params.id, {title , author , description , image_url})
        res.redirect('/admin')
    } catch (error) {
        console.error(error)
        res.status(500).send('loi khi cap nhap sach')
    }
}



