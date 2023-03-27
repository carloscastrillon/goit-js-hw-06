const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
 const ingredientsUl = document.querySelector('#ingredients');

for (let ingredientsItem of ingredients) {
    const item = document.createElement("li");
    item.textContent  = ingredientsItem;
    ingredientsUl.append(item);
}
