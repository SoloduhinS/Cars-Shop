const carsContainer = document.querySelector("#cars-container");

async function getCars() {
    const responce = await fetch("./js/cars.json");

    const carsArray = await responce.json();

    const carsInitialState = {};
    carsArray.forEach((item) => {
        carsInitialState[item.id] = {
            price: item.price,
            percent: 0,
        };
    });

    window.carsState = carsInitialState;
    renderCars(carsArray);
};

function renderCars(carsArray) {
    for (let item of carsArray) {
        const carsHTML = `<div class="cars__list__grid"
                            <div class="cars__list"
                                <div class="cars__brands__list" data-id="${item.id}">
                                    <img class="car-img" src="./img/${item.imgSrc}">
                                    <div class="car__info">
                                        <h1 class="car__brand">${item.brand}</h1>
                                        <h2 class="car__model">${item.model}</h2>
                                        <h4 class="car__color">${item.color}</h4>
                                    </div>
                                    <div class="price__container">
                                        <div class="price__list">
                                            <div class="price__car">${item.price}</div>
                                            <button class="btn__buy" data-carid="${item.id}">Buy Now</button>
                                            <div class="input-group">
                                                <label class="input-group-text" for="inputGroupSelect01">Options</label>
                                                <select class="form-select options-select" data-carid="${item.id}">
                                                    <option value="0">Standart</option>
                                                    <option value="10">Comfort + 10% to cost</option>
                                                    <option value="20">Luxury + 20% to cost</option>
                                                    <option value="25">Limited +25% to cost</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>`;
        carsContainer.insertAdjacentHTML('beforeend', carsHTML);
    };
};

getCars();
console.log(getCars)