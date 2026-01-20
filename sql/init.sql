CREATE DATABASE IF NOT EXISTS book_store;
USE book_store;

CREATE TABLE IF NOT EXISTS books (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    author VARCHAR(100),
    description TEXT,
    image_url VARCHAR(255),
    price DECIMAL(10, 2)
) ENGINE=InnoDB;

INSERT INTO books (title, author, description) VALUES 
('5 Múi Giờ, 10 Tiếng Bay', 'Nhật Ký Yêu Xa', 'Câu chuyện về tình yêu xa đầy cảm xúc.'),
('Gói Nỗi Buồn Lại Và Ném Đi', 'An Nhiên', 'Cuốn sách giúp bạn vượt qua những ngày khó khăn.'),
('Hẹn Nhau Ở Một Cuộc Đời Khác', 'Gari', 'Những tản văn nhẹ nhàng về cuộc sống.');