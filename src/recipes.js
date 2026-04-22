import './recipes.css';
import data from './data.json';

// Handle filter button collapse/expand
const filterButtons = document.querySelectorAll('.recipes__filter-btn');

filterButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const isExpanded = button.getAttribute('aria-expanded') === 'true';
    const controlsId = button.getAttribute('aria-controls');
    const filterOptions = document.getElementById(controlsId);

    // Close all other filter options
    filterButtons.forEach((otherButton) => {
      const otherControlsId = otherButton.getAttribute('aria-controls');
      const otherFilterOptions = document.getElementById(otherControlsId);
      otherButton.setAttribute('aria-expanded', 'false');
      otherFilterOptions.setAttribute('aria-hidden', 'true');
    });

    // Toggle the clicked button's filter options
    button.setAttribute('aria-expanded', !isExpanded);
    filterOptions.setAttribute('aria-hidden', isExpanded);
  });
});

const recipes = [...data];
console.log(recipes);

// Display data recipes from json file
const recipesList = document.querySelector('.recipes__grid');

function renderRecipe(recipe) {
  if (!recipe) return;
  return `<article class="recipes__card">
          <img
            src="${recipe.image}"
            alt=""
            class="recipes__card-image"
          />
          <h3 class="recipes__card-title">${recipe.title}</h3>
          <p class="recipes__card-description">
            ${recipe.description}
          </p>
          <ul class="recipes__card-meta">
            <li class="recipes__card-meta-item">
              <img
                src="/images/icon-servings.svg"
                alt=""
                class="recipes__card-meta-icon"
              />
              <p class="recipes__card-meta-text">Serving: <span>${recipe.servings}</span></p>
            </li>
            <li class="recipes__card-meta-item">
              <img
                src="/images/icon-prep-time.svg"
                alt=""
                class="recipes__card-meta-icon"
              />
              <p class="recipes__card-meta-text">Prep: <span>${recipe.prep_time_min}</span> min</p>
            </li>
            <li class="recipes__card-meta-item">
              <img
                src="/images/icon-cook-time.svg"
                alt=""
                class="recipes__card-meta-icon"
              />
              <p class="recipes__card-meta-text">Cook: <span>${recipe.cook_time_min}</span> min</p>
            </li>
          </ul>
          <button class="recipes__card-cta">View Recipe</button>
        </article>`;
}

const prepFilter = document.querySelector('#prep-time-options');
const cookFilter = document.querySelector('#cook-time-options');
const searchInput = document.querySelector('.recipes__search-input');
function addRecipe(recipe) {
  recipesList.insertAdjacentHTML('beforeend', renderRecipe(recipe));
}
function displayUI() {
  const isNoneFilter = true;
  if (isNoneFilter) recipes.forEach((rec) => addRecipe(rec));
}
function clearFilter(btnClear) {
  btnClear.addEventListener('click', () => {
    recipesList.innerHTML = '';
    displayUI();
  });
}
displayUI();

prepFilter.addEventListener('change', function (e) {
  recipesList.innerHTML = '';
  if (e.target.classList.contains('recipes__filter-input')) {
    const prepTime = e.target.value;
    recipes.forEach((rec) => {
      if (rec.prep_time_min <= prepTime) addRecipe(rec);
    });
  }
  const btnClear = prepFilter.querySelector('.recipes__filter-clear');
  clearFilter(btnClear);
});

cookFilter.addEventListener('change', function (e) {
  recipesList.innerHTML = '';
  if (e.target.classList.contains('recipes__filter-input')) {
    const cookTime = e.target.value;
    recipes.forEach((rec) => {
      if (rec.cook_time_min <= cookTime) addRecipe(rec);
    });
  }
  const btnClear = cookFilter.querySelector('.recipes__filter-clear');
  clearFilter(btnClear);
});
searchInput.addEventListener('input', function (e) {
  const searchText = searchInput.value.trim().toLowerCase();
  recipesList.innerHTML = '';
  if (searchText === '') {
    displayUI();
  } else {
    recipes.forEach((rec) => {
      const recipeTitle = rec.title.toLowerCase().includes(searchText);
      if (recipeTitle) {
        addRecipe(rec);
      }
    });
  }
});
