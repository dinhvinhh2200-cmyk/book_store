const { create } = require('express-handlebars');
const db = require('../config/db')

const Book = {
    getAll: async () => {
        const [rows] = await db.execute('SELECT * FROM books');
        return rows
    },

    // ham tạo mới sách
    create: async (data) => {
        const {title , author , description , image_url} = data 
        const query = 'InSERT INTO books (title , author , description, image_url) VALUE (?, ?, ?, ?)'
        return await db.execute(query, [title, author , description, image_url])
    },

    // ham xoa sach
    delete: async(id) => {
        const query = 'DELETE FROM books WHERE id = ?'
        return await db.execute(query, [id])
    }
}
module.exports = Book 

// viết hàm thêm sách vào database 