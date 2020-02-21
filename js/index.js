import { shows } from '../mock-api.js';

const $category = document.getElementById('category');
let selectedCategory = '';

function filterShowsByCategory(category) {
  let showsByCategory = shows.filter(show => show.genres.includes(category));
  console.log('showsByCategory:::: ', showsByCategory);
}

function onChangeCategory(e) {
  selectedCategory = $category.options[$category.selectedIndex].value;
  console.log('selectedCategory:::: ', selectedCategory);
  filterShowsByCategory(selectedCategory);
}

$category.addEventListener('change', e => onChangeCategory(e));

(function load() {
  console.log('$category:::: ', $category);
  onChangeCategory();
})();
