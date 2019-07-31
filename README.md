# Info
   tool 					: GET SCHEDULE

   description 	: cào dữ liệu từ trang daotao để lấy thời khóa biểu của các khoa

   author				: RainSilver

   contributer		: Giấy Nháp

   github				: [Volkner Thành](https://github.com/VolknerThanh "github")

>NOTE : tool thao tác trên nền front-end, chỉ get dữ liệu, không tác động đến cơ sở dữ liệu

# RUNNING

1. mở trang đào tạo và đăng nhập.
2. vào tab đăng ký môn.
3. bấm `Ctrl+Shift+J` để mở cửa sổ console ở devtool.
4. copy toàn bộ code dưới đây và paste vào console đó và nhấn Enter.
5. Sau đó gõ lệnh sau, với `so_luong` là số lượng dòng muốn cào trong dropdown list.
```javascript
runLoop(so_luong)
``` 
6. Đợi nó chạy xong.
7. Gõ lệnh sau vào console để tải file về máy.
```javascript
downloadData()
```