import { shows } from '../mock-api.js';

const $category = document.getElementById('category');
let selectedCategory = '';

export function onChangeCategory() {
  selectedCategory = $category.options[$category.selectedIndex].value;
  console.log('selectedCategory:::: ', selectedCategory);
}

(function load() {
  console.log('$category:::: ', $category);
  console.log('shows:::: ', shows);
  let categories = new Set();
  shows.forEach(show => show.genres.forEach(genre => categories.add(genre)));
  categories = [...(new Set(categories))].sort();
  console.log('categories:::: ', categories);
})();
