
let options = document.querySelector(".options");
const items = options.querySelectorAll("p");

// Xử lý sự kiện "click" cho mỗi phần tử
items.forEach(function (item, icon) {
    item.addEventListener("click", function () {
        // Xoá class "active" khỏi tất cả các phần tử con
        items.forEach(function (item) {
            item.classList.remove("option-p__setColor");
        });

        // Thêm class "active" cho phần tử được nhấp vào
        this.classList.add("option-p__setColor");
        let w = document.querySelector(".option-p__setColor").offsetWidth;
        let icon = options.querySelector(".fa-icon-arrow-op");
        console.log(w);
        if (w === 173) {
            icon.style.transform = `translateX(0px)`;
        } else if (w === 216) {
            icon.style.transform = `translateX(230px)`;
        } else if (w === 88) {
            icon.style.transform = `translateX(490px)`;
        } else if (w === 390) {
            icon.style.transform = `translateX(615px)`;
        }
    });
});
