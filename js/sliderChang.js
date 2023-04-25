const slider = document.querySelector(".xem_gan_day");
const sliderMain = document.querySelector(".sl_main");
const sliderItems = document.querySelectorAll(".sl_item");
const nextBtn = document.querySelector(".icon-r");
const prevBtn = document.querySelector(".icon-l");
const sliderItemWidth = sliderItems[0].offsetWidth;
let posX = 0;
let index = 0;
let len = sliderItems.length;

nextBtn.addEventListener("click", () => {
    handleChangeSlide(1);
});
prevBtn.addEventListener("click", () => {
    handleChangeSlide(-1);
});

function handleChangeSlide(direction) {
    if (direction === 1) {
        index++;
        if (index > len - 4) {
            index = len - 4;
            return;
        }
        posX = posX - sliderItemWidth;
        sliderMain.style = `transform: translateX(${posX}px)`;
    } else if (direction === -1) {
        index--;
        if (index < 0) {
            index = 0;
            return;
        }
        posX = posX + sliderItemWidth;
        sliderMain.style.transform = `translateX(${posX}px)`;
    }
}
