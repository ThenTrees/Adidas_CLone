const slider = document.querySelector(".xem_gan_day");
const sliderMain = document.querySelector(".sl_main");
const sliderItem = document.querySelectorAll(".sl_item");
const nextBtn = document.querySelector(".icon-r");
const prevBtn = document.querySelector(".icon-l");
const sliderItemWidth = document.querySelector(".sl_item");
const index = 0;
let posX = 0;

nextBtn.addEventListener("click", () => {
    handleChangeSlide(1);
});
prevBtn.addEventListener("click", () => {
    handleChangeSlide(-1);
});

function handleChangeSlide(direction) {
    if (direction === 1) {
        posX = posX - sliderItemWidth;
        console.log(sliderItemWidth);
        sliderMain.style = `transform: translateX(${posX}px)`;
    } else if (direction === -1) {
    }
}
