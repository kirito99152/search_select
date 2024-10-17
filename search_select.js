class search_select {
    msg = "{0} Không hợp lệ";
    input_class = "form-control";
    validate_class = "text-danger";
    constructor(formid) {
        this.formid = formid;
    }
    run() {
        //Lưu dữ liệu cho select
        var data = {};
        let select = document.querySelectorAll(`#${this.formid} select`);
        //Tìm label
        let labels = document.querySelectorAll(`#${this.formid} label`);
        let label = {};
        for (let i = 0; i < labels.length; ++i) {
            if (labels[i].htmlFor != '') {
                label[labels[i].htmlFor] = labels[i].innerHTML;
            }
        }
        //Xử lý
        for (let i = 0; i < select.length; ++i) {
            select[i].hidden = true;
            //Khởi tạo các giá trị cần thiết
            let cr = {}; //Giá trị của select hiện tại
            let idlist = "datalist" + i.toString(); //Id của datalist
            let input = document.createElement("input");
            let datalist = document.createElement("datalist");
            let options = select[i].options; 
            let validate = document.createElement("span"); //Tạo text box cho validator
            //Cài đặt input
            input.placeholder = "Nhập để tìm kiếm...";
            input.className = `search-input ${this.input_class}`;
            input.setAttribute("list", idlist);
            input.setAttribute("selid", select[i].id);
            input.setAttribute("label", label[select[i].id]);
            input.value = select[i].options[select[i].selectedIndex].text; //Lấy giá trị hiện tại
            input.addEventListener("change", function (e) { //Thêm event cho input
                let selid = e.target.getAttribute("selid");
                let label = e.target.getAttribute("label");
                let validate = document.getElementById("Validate_" + selid);
                let value = e.target.value;
                value = value.trim(); 
                //Nếu giá trị không hợp lệ trả về error msg
                if (typeof data[selid][value] !== 'undefined') {
                    document.getElementById(selid).selectedIndex = data[selid][value];
                    validate.innerHTML = "";
                } else {
                    validate.innerHTML = validate.getAttribute("msg").replace("{0}", label);
                }
            });
            //Xử lý datalist
            //Khởi tạo giá trị cho cr
            for (let j = 0; j < options.length; ++j) {
                cr[options[j].text] = j;
                let option = document.createElement("option");
                option.value = options[j].text;
                datalist.appendChild(option);
            }
            datalist.id = idlist;
            data[select[i].id] = cr;
            //Xử lý validator
            validate.className = `${this.validate_class}`;
            validate.id = "Validate_" + select[i].id;
            validate.setAttribute("msg", this.msg);
            //Thêm vào form
            select[i].after(input, datalist, validate);
        }
        //Xử lý sự kiện submit
        document.getElementById("form").addEventListener("submit", function(e) {
            let input = document.getElementsByClassName("search-input"); //Tìm các input được khởi tạo
            for (let i = 0; i < input.length; ++i) {
                let select_id = input[i].getAttribute("selid");
                let value = input[i].value;
                value = value.trim();
                //Nếu value không đúng dừng quá trình submit
                if (typeof data[select_id][value] === 'undefined') {
                    input[i].focus();
                    e.preventDefault();
                    break;
                }
            }
        });
    }
}