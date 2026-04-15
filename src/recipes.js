import "./style.css";

const recipes = [
  "Chicken curry",
  "Tomato pasta",
  "Garlic butter shrimp",
  "Miso ramen",
  "Beef stir-fry",
  "Tofu salad",
  "Lemon grilled fish",
];

const filterInput = document.querySelector(".content-panel__input");
const recipeList = document.querySelector(".recipe-list");

function renderList(keyword = "") {
  if (!recipeList) return;

  const normalizedKeyword = keyword.trim().toLowerCase();
  const filteredRecipes = recipes.filter((item) =>
    item.toLowerCase().includes(normalizedKeyword),
  );

  if (filteredRecipes.length === 0) {
    recipeList.innerHTML = "<li class='recipe-list__item'>No recipes found.</li>";
    return;
  }

  recipeList.innerHTML = filteredRecipes
    .map((item) => `<li class="recipe-list__item">${item}</li>`)
    .join("");
}

if (filterInput) {
  filterInput.addEventListener("input", (event) => {
    const target = event.target;
    if (!(target instanceof HTMLInputElement)) return;
    renderList(target.value);
  });
}

renderList();
