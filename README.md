Tác giả: Cao Thanh Phong.

Đơn vị: PSA.

Chức năng: công cụ thêm search cho phần search box cho select.

Yêu cầu: Phải cài đặt bootstrap 5 (https://getbootstrap.com/docs/5.0/getting-started/download/)

Hướng dẫn:
-  Khởi tạo:
```js
let select = new search_select("<your_form_id>")
```
-  Set class cho input, mặc định là "form-control":
```js
select.input_class =  "<your_class>"
```
-  Set class cho span (TextBox báo lỗi), mặc định là "text-danger":
```js
select.validate_class =  "<your_class>"
```
