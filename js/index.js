import { shows } from '../mock-api.js';

const $category = document.getElementById('category');
const $showsList = document.getElementById('shows-list');
let selectedCategory = '';

function showItemTemplate(show, category) {
  return `<div class="shows-list__item" data-id="${show.id}" data-category="${category}">
      <div class="shows-list__image">
        <img src="${show.image.medium}">
      </div>
      <h4 class="shows-list__name">
        ${show.name}
      </h4>
    </div>`;
}

function createTemplate(HTMLString) {
  const html = document.implementation.createHTMLDocument();
  html.body.innerHTML = HTMLString;
  return html.body.children[0];
}

function renderShowsList(shows, category) {
  $showsList.children[0].remove();
  shows.forEach(show => {
    const HTMLString = showItemTemplate(show, category);
    const showElement = createTemplate(HTMLString);
    $showsList.appendChild(showElement);
    const image = showElement.querySelector('img');
    image.addEventListener('load', e => event.srcElement.classList.add('fadeIn'));
  });
}

function filterShowsByCategory(category) {
  let showsByCategory = shows.filter(show => show.genres.includes(category));
  console.log('showsByCategory:::: ', showsByCategory);
  renderShowsList(showsByCategory, category);
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
