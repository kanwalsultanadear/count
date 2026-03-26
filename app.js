const increaseButtonEl = document.querySelector(".counter_button--increase");
const decreaseButtonEl = document.querySelector(".counter_button--decrease");
const resetButtonEl = document.querySelector(".counter_reset_button");
const counterValueEl = document.querySelector(".counter_value");


increaseButtonEl.addEventListener("click", function () {
    const currentValue = +counterValueEl.textContent;
    counterValueEl.textContent = currentValue + 1;
});


decreaseButtonEl.addEventListener("click", function () {
    const currentValue = +counterValueEl.textContent;
    counterValueEl.textContent = currentValue - 1;
});


resetButtonEl.addEventListener("click", function () {
    counterValueEl.textContent = 0;
});