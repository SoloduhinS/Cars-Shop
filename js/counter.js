const totalPriceElement = document.querySelector('#total-price');

setTimeout(function () {
    const optionsSelect = document.querySelectorAll('.options-select');
    const buyButtons = document.querySelectorAll('.btn__buy');

    optionsSelect.forEach( (option) => {
        option.onchange = function (event) {
            const carId = this.dataset.carid;
            const value = event.target.value;

            window.carsState[carId].percent = parseInt(value);
        };
    });

    buyButtons.forEach ((button) => {
        button.addEventListener('click', function () {
            const carId = this.dataset.carid;
            const { price, percent } = window.carsState[carId];
            const addPrice = ( price / 100 ) * percent;
            const totalCarPrice = price + addPrice;
            totalPriceElement.innerText = totalCarPrice;
        });
    });
}, 2000);