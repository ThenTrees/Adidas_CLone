
let optionwho = document.querySelector(".option-who");
const itemwho = optionwho.querySelectorAll("p");

// Xử lý sự kiện "click" cho mỗi phần tử
itemwho.forEach(function (item, icon2) {
    item.addEventListener("click", function () {
        // Xoá class "active" khỏi tất cả các phần tử con
        itemwho.forEach(function (item) {
            item.classList.remove("option-who-color");
        });

        // Thêm class "active" cho phần tử được nhấp vào
        this.classList.add("option-who-color");
        let w2 = document.querySelector(".option-who-color").offsetWidth;
        let icon2 = optionwho.querySelector(".icon-who");
        console.log(w2);
        if (w2 === 114) {
            icon2.style.transform = `translateX(0px)`;
        } else if (w2 === 65) {
            icon2.style.transform = `translateX(175px)`;
        } else if (w2 === 66) {
            icon2.style.transform = `translateX(290px)`;
        }
    });
});
