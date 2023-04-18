const elmWhathot = document.querySelectorAll(".body-item");

for (const el of elmWhathot) {
    el.addEventListener("click", () => {
        window.location = "../otherPage/what-hot-detail.html";
    });
}
