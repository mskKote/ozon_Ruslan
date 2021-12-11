//*---------------------------------- Логика отрисовки товаров
const cardContainer = document.querySelector(".goods-cards-container")
const t = document.querySelector(".good-card-template")
// Элементы шаблона
const t_image = t.content.querySelector(".image")
const t_name = t.content.querySelector(".name")
const t_author = t.content.querySelector(".author")
const t_price = t.content.querySelector(".price")

const currencyFormatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  minimumFractionDigits: 2
})

function goodRender({ name, price, image, author }) {
  t_image.src = image
  t_name.textContent = name
  t_author.textContent = author
  t_price.textContent = currencyFormatter.format(price)
  cardContainer.append(t.content.cloneNode(true))
}

//*---------------------------------- Создаём мокаппы / логика товаров
const categories = [
  "Music", "Sport", "Electronics",
  "Clothes", "Home", "Beauty",
  "Games", "Books"
]
function getRandomCategories() {
  const cats = new Set()
  const amount = Math.round(Math.random() * 3)
  for (let i = 0; i < amount; i++) {
    cats.add(categories[Math.random() * categories.length])
  }
  return cats
}

const goods = [...new Array(10)].map((_, i) => ({
  id: i,
  name: "Tennis table and everything",
  price: 100 + Math.random() * 1000,
  image: "https://klike.net/uploads/posts/2021-10/1633415183_1.jpg",
  author: "Andrew Mitchell",
  categories: getRandomCategories()
}))
console.log(goods)


window.addEventListener("DOMContentLoaded", () => {
  // TODO: скопировать fetch запрос из postman для подтягивания товаров
  // TODO: запустить функцию отрисовки товара

  // Моки
  goods.forEach(goodRender);
})
