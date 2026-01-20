require('dotenv').config(); // Nạp biến từ .env [cite: 147]
const db = require('./config/db'); // Kết nối tới file cấu hình DB [cite: 218, 245]
const path = require('path');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const { engine } = require('express-handlebars'); // cài đặt handlebars 
const bookRoutes = require('./routes/book.route');
app.use('/', bookRoutes);
const port = 3000; 

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// 1. Cấu hình Handlebars làm View Engine
app.engine('hbs', engine({
    extname: '.hbs',
    defaultLayout: 'main',
    layoutsDir: path.join(__dirname, 'resources/views/layouts'),
    partialsDir: path.join(__dirname, 'resources/views/partials')
}));

app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources/views'));

app.use(express.static(path.join(__dirname, 'public')));

// app.get('/', (req, res) => {
//   res.render('home');
// });

app.listen(port, () => {
  console.log(`Ứng dụng đang chạy tại http://localhost:${port}`);
});

// chuẩn bị đổ database vào tạo model và đổ dữ liệu từ model vào