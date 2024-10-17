Tác giả: Cao Thanh Phong.

Đơn vị: PSA.

Chức năng: công cụ thêm search cho phần search box cho select.

Yêu cầu: Phải cài đặt bootstrap 5 (https://getbootstrap.com/docs/5.0/getting-started/download/)

Cách cài đặt:
-  CDN:
```html
<script src="https://cdn.jsdelivr.net/gh/kirito99152/search_select@latest/search_select.js"></script>
```
-  Cài đặt trực tiếp file search_select vào folder:
```html
<script src="yourpath/search_select.js"></script>
```
Hướng dẫn:
-  Lưu ý: mỗi select nếu muốn thêm search phải có id
-  Khởi tạo:
```js
let select = new search_select("<your_form_id>")//your_form_id là id của form muốn thêm search box
```
-  Set class cho input, mặc định là "form-control":
```js
select.input_class =  "<your_class>"
```
-  Set class cho span (TextBox báo lỗi), mặc định là "text-danger":
```js
select.validate_class =  "<your_class>"
```
- Set nội dung tin trả về lỗi, mặc định là "{0} Không hợp lệ":
```js
select.msg = "<your_msg>" //{0} đại diện cho label của select. Label bắt buộc phải định dạng for = "<select_id>"
```
