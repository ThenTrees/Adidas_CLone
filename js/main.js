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


