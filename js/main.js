const elmWhathot = document.querySelectorAll(".body-item");

for (const el of elmWhathot) {
    el.addEventListener("click", () => {
        window.location = "../otherPage/what-hot-detail.html";
    });
}

// Thêm sự kiện menu trượt, nút về đầu trang
//body cho trình duyệt khác
window.onscroll = function () {
    console.info(document.documentElement.scrollTop);
    var header = document.getElementById("menu-header");
     var gototop = document.getElementById("gototop");
    if (document.documentElement.scrollTop > 300 || document.body.scrollTop > 300) {
        header.style.position = "fixed";
        header.style.top = 0;
        header.style.left = 0;
        header.style.right = 0;
        header.style.backgroundColor = "white";
        header.style.zIndex = 9;

         gototop.style.display = "block";

    } else {
         header.style.position = "relative";
         gototop.style.display = "none";
    }
}
function gototop() {
    var time = setInterval(function () {
        document.documentElement.scrollTop-=20;
        if (document.documentElement.scrollTop <= 0)
            clearInterval(time);
    }, 10);
    
}

//Regex đăng nhập
function Checkemail() {
    var email = document.getElementById('txtemail').value;
    var errorName = document.getElementById('error-email');
    var regexName = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;

    if (email == '' || email == null) {
        errorName.innerHTML = 'Vui lòng nhập địa chỉ e-mail hợp lệ';
    } else if (!regexName.test(email)) {
        errorName.innerHTML = "Nhập Email theo định dạng sau (abc@gmail.com)";
    } else {
        errorName.innerHTML = "";
        return true;
    }
    return false;
}

function CheckMatKhau() {
    var matkhau = document.getElementById('txtmatkhau').value;
    var errorName = document.getElementById('error-matkhau');
    var regexName = /.{6,}/;

    if (matkhau == '' || matkhau == null) {
        errorName.innerHTML = 'Mật khẩu không được để trống';
    } else if (!regexName.test(matkhau)) {
        errorName.innerHTML = "Mật khẩu chứa từ 6 kí tự trở lên";
    } else {
        errorName.innerHTML = "";
        return true;
    }
    return false;
}

