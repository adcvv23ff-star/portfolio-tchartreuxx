# Hướng dẫn đưa Portfolio lên mạng (miễn phí)

Portfolio này là web tĩnh (HTML + Tailwind CDN), không cần server hay build gì cả — chỉ cần upload đúng cấu trúc thư mục là chạy được. Dưới đây là 3 cách phổ biến, chọn 1 cách là đủ.

---

## Cách 1: GitHub Pages (khuyên dùng, miễn phí vĩnh viễn)

1. Tạo tài khoản GitHub (nếu chưa có): https://github.com/signup
2. Tạo repository mới, đặt tên bất kỳ (VD: `portfolio`), để **Public**.
3. Vào repo vừa tạo → nút **Add file → Upload files** → kéo thả **toàn bộ** nội dung trong zip (index.html, du-an.html, bai-1.html...bai-6.html, tong-ket.html, và cả thư mục `assets/`) vào → **Commit changes**.
4. Vào **Settings → Pages** (menu bên trái).
5. Ở mục **Branch**, chọn `main` → thư mục `/ (root)` → **Save**.
6. Đợi 1–2 phút, GitHub sẽ cấp cho bạn 1 link dạng:
   `https://<tên-tài-khoản>.github.io/<tên-repo>/`
7. Xong! Link này bạn có thể dán vào CV, gửi giảng viên, chia sẻ MXH.

**Lưu ý:** nhớ upload cả thư mục `assets/` (chứa ảnh, PDF, favicon) — thiếu là ảnh/PDF sẽ không hiện.

---

## Cách 2: Netlify (kéo-thả, nhanh nhất — không cần tài khoản GitHub)

1. Vào https://app.netlify.com/drop
2. Kéo thả **cả thư mục** đã giải nén (chứa index.html + assets/...) vào khung trên trang.
3. Đợi vài giây, Netlify tự cấp 1 link dạng `https://ten-ngau-nhien.netlify.app`.
4. (Tuỳ chọn) Đăng ký tài khoản miễn phí để đổi tên link cho dễ nhớ, VD `tchartreuxx.netlify.app`.

---

## Cách 3: Vercel

1. Vào https://vercel.com → đăng ký bằng GitHub.
2. **Add New → Project** → import repo bạn đã tạo ở Cách 1 (hoặc kéo thả thư mục qua Vercel CLI).
3. Vercel tự nhận diện là site tĩnh, bấm **Deploy**.
4. Nhận link dạng `https://ten-repo.vercel.app`.

---

## Sau khi có link

- Trang chủ chính là `index.html`, nên link gốc (không cần thêm `/index.html`) sẽ tự mở đúng trang.
- Đã có sẵn thẻ Open Graph — khi dán link vào Messenger/Zalo/Facebook sẽ tự hiện tiêu đề, mô tả và ảnh preview đẹp thay vì link trơn.
- Nhớ mở thử trên điện thoại lẫn máy tính để chắc chắn ảnh, PDF, hiệu ứng đều chạy tốt trước khi gửi giảng viên.

## Cần cập nhật nội dung sau khi đã deploy?

Chỉ cần sửa lại file `.html` tương ứng trên máy, rồi upload đè lên (GitHub: **Add file → Upload files** lại; Netlify: kéo-thả lại thư mục vào cùng trang Drop, hoặc kéo vào khung deploy cũ) — không cần làm lại từ đầu.
