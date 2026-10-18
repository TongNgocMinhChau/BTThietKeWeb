---
name: web-dev-standards
description: Quy chuẩn phát triển web frontend (HTML5/CSS/JS) áp dụng phong cách Glassmorphism và quy trình làm việc tương tác.
---

# Web Development Skill Guidelines

## 1. Nguyên tắc cốt lõi (Core Principles)
- **Công nghệ cho phép:** Chỉ sử dụng HTML5, CSS3, và JavaScript thuần (Vanilla JS). Không sử dụng thư viện hoặc framework JS/CSS bên ngoài trừ khi được chỉ định.
- **Phong cách thiết kế:** Glassmorphism (sử dụng hiệu ứng kính mờ `backdrop-filter`, viền bán trong suốt, hiệu ứng đổ bóng mờ nhẹ và nền mờ mờ).
- **Lập kế hoạch trước khi thực thi:** Luôn lập kế hoạch chi tiết trước khi bắt đầu viết code mới hoặc sửa đổi code hiện tại.
- **Tương tác & Xác nhận:** Bất kỳ thay đổi nào (về cấu trúc, giao diện, hay logic) đều phải đưa ra các lựa chọn/phương án chi tiết cho người dùng duyệt và lựa chọn trước khi áp dụng vào code.

---

## 2. Cấu trúc thư mục (Project Structure)
Dự án bắt buộc phải tuân thủ cấu trúc thư mục phân tách rõ ràng như sau:

```text
/
├── .skill/
│   └── skill.md
├── css/
│   └── style.css
├── js/
│   └── main.js
├── images/
├── video/
└── index.html
```

*Lưu ý: CSS và JS bắt buộc phải được tách thành các file external (`.css`, `.js`) riêng biệt, không viết script/style inline hoặc nằm trực tiếp trong file HTML.*

---

## 3. Tiêu chuẩn chức năng cho các trang Danh sách (List View Requirements)
Mọi trang hoặc thành phần quản lý/hiển thị danh sách dữ liệu bắt buộc phải tích hợp đầy đủ 4 tính năng cơ bản:

1. **Tìm kiếm (Search):** Cho phép tìm kiếm dữ liệu dựa trên từ khóa.
2. **Lọc (Filter):** Hỗ trợ lọc danh sách theo các tiêu chí / phân loại liên quan.
3. **Sắp xếp (Sorting):** Cho phép sắp xếp danh sách theo tiêu đề (`title`) tăng dần / giảm dần.
4. **Phân trang (Pagination):**
   - Bộ chọn số lượng bản ghi hiển thị trên mỗi trang với các mức: **10**, **20**, **50**, và **all** (tất cả).
   - Thanh điều hướng phân trang (Trang trước, Trang sau, Số trang).

---

## 4. Quy trình làm việc bắt buộc (Mandatory Workflow)

### Bước 1: Lập kế hoạch (Planning)
- Phân tích yêu cầu hoặc tính năng cần triển khai.
- Đưa ra bản phác thảo kế hoạch xử lý (HTML markup, CSS layout, logic JS).

### Bước 2: Đưa ra lựa chọn & Xác nhận (User Confirmation)
- Trình bày rõ các tùy chọn/phương án cho người dùng.
- Chờ người dùng xác nhận lựa chọn trước khi tiến hành viết hoặc sửa code.

### Bước 3: Thực thi (Implementation)
- Viết code sạch, đúng chuẩn UI Glassmorphism.
- Đảm bảo tính năng Tìm kiếm - Lọc - Sắp xếp theo title - Phân trang hoạt động chính xác.