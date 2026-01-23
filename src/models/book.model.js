const { create } = require('express-handlebars');
const db = require('../config/db')

const Book = {
    getAllActive: async () => {
        const [rows] = await db.execute('SELECT * FROM books WHERE is_deleted = 0');
        return rows
    },

    // lay sach cho trang admin
    getAllForAdmin: async () => {
        const [rows] = await db.execute('SELECT * FROM books')
        return rows
    },

    // xoa men 
    softDelete: async (id) => {
        const query = 'UPDATE books SET is_deleted = 1 WHERE id = ?'
        return await db.execute(query, [id])
    },

    // khoi phuc sach
    restore: async (id) => {
        const query = 'UPDATE book SET is_deleted = 0 WHERE id = ?'
        return await db.execute(query, [id])
    },

    // ham tạo mới sách
    create: async (data) => {
        const {title , author , description , image_url} = data 
        const query = 'InSERT INTO books (title , author , description, image_url) VALUE (?, ?, ?, ?)'
        return await db.execute(query, [title, author , description, image_url])
    },
}
module.exports = Book 

// viết hàm thêm sách vào database 