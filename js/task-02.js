const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const allIngredients = document.querySelector("#ingredients")

const products = ingredients.map((el) => {
  const listIngredients = document.createElement("li");
  listIngredients.classList.add("item");
  listIngredients.textContent = el;

  return listIngredients
})

allIngredients.append(...products);

// console.log(products)
// console.log(allIngredients)