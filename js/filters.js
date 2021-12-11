//*---------------------------------- Логика фильтров

const filters = {
    sellerFilter: null,
    priceFilter: {
        min: 0,
        max: null
    },
    category: null
}

//* Продавец
function changeSeller(e) {
    console.log("changeSeller", e.target.value)
    filters.sellerFilter = e.target.value
}

//* Ценовой диапазон
function changePriceRange(e) {
    console.log("changePriceRange", e.target.value, e.target.dataset.filter)
    filters.priceFilter[e.target.dataset.filter] = e.target.value
}

//* Категории
let activeBtn = null
function applyFilter(e) {
    console.log("applyFilter >> ", e.target.dataset.filter)
    //### Изменяем состояние кнопки #####
    activeBtn?.classList.toggle("active")
    activeBtn = activeBtn != e.target ? e.target : null
    activeBtn?.classList.toggle("active")
    //###################################
    filters.category = e.target.dataset.filter
}