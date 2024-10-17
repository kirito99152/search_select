class search_select {
        input_class = "form-control";
        validate_class = "text-danger";
        constructor(formid) {
            this.formid = formid;
        }
        run() {
            var data = {};
            let select = document.querySelectorAll(`#${this.formid} select`);
            for (let i = 0; i < select.length; ++i) {
                select[i].hidden = true;
                let cr = {};
                let idlist = "datalist" + i.toString();
                let input = document.createElement("input");
                let datalist = document.createElement("datalist");
                let options = select[i].options;
                let validate = document.createElement("span");
                input.placeholder = "Nhập để tìm kiếm...";
                input.className = `search-input ${this.input_class}`;
                input.setAttribute("list", idlist);
                input.setAttribute("selid", select[i].id);
                input.value = select[i].options[select[i].selectedIndex].text;
                input.addEventListener("change", function (e) {
                    let selid = e.target.getAttribute("selid");
                    let validate = document.getElementById("Validate_" + selid);
                    let value = e.target.value;
                    value = value.trim(); 
                    if (typeof data[selid][value] !== 'undefined') {
                        document.getElementById(selid).selectedIndex = data[selid][value];
                        validate.innerHTML = "";
                    } else {
                        validate.innerHTML = validate.getAttribute("msg");
                    }
                });
                for (let j = 0; j < options.length; ++j) {
                    cr[options[j].text] = j;
                    let option = document.createElement("option");
                    option.value = options[j].text;
                    datalist.appendChild(option);
                }
                datalist.id = idlist;
                data[select[i].id] = cr;
                validate.className = `${this.validate_class}`;
                validate.id = "Validate_" + select[i].id;
                validate.setAttribute("msg", "Không hợp lệ");
                select[i].after(input, datalist, validate);
            }
            document.getElementById("form").addEventListener("submit", function(e) {
                let input = document.getElementsByClassName("search-input");
                for (let i = 0; i < input.length; ++i) {
                    let select_id = input[i].getAttribute("selid");
                    let value = input[i].value;
                    value = value.trim();
                    if (typeof data[select_id][value] === 'undefined') {
                        input[i].focus();
                        e.preventDefault();
                        break;
                    }
                }
            });
        }
    }