-- 1. Tạo bảng sách [cite: 35]
CREATE TABLE books (
    id INT AUTO_INCREMENT PRIMARY KEY, [cite: 36]
    title VARCHAR(255) NOT NULL, [cite: 37]
    author VARCHAR(100), [cite: 38]
    description TEXT, [cite: 39]
    content TEXT, [cite: 40]
    catalog_id INT, [cite: 41]
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP [cite: 42]
) ENGINE=InnoDB; [cite: 48]

-- 2. Chèn dữ liệu mẫu [cite: 81]
INSERT INTO books (title, author, description, content, catalog_id) VALUES 
('5 Múi Giờ, 10 Tiếng Bay', 'Nhật Ký Yêu Xa', 'Truyện tình cảm', 'Nội dung sách 1...', 1), [cite: 82]
('Gói Nỗi Buồn Lại Và Ném Đi', 'An Nhiên', 'Tản văn chữa lành', 'Nội dung sách 2...', 1), [cite: 83]
('Clean Code', 'Robert C. Martin', 'Lập trình chuẩn mực', 'Nội dung sách 5...', 4); [cite: 86]