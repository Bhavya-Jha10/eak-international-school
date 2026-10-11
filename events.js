
const buttons = document.querySelectorAll('[data-filter]');
const cards = [...document.querySelectorAll('[data-category]')];
const search = document.querySelector('#eventSearch');
let active = 'all';
function updateEvents() {
  const term = (search?.value || '').trim().toLowerCase();
  cards.forEach(card => {
    const categoryMatch = active === 'all' || card.dataset.category === active;
    const textMatch = card.textContent.toLowerCase().includes(term);
    card.hidden = !(categoryMatch && textMatch);
  });
}
buttons.forEach(btn => btn.addEventListener('click', () => {
  active = btn.dataset.filter;
  buttons.forEach(b => b.classList.toggle('active', b === btn));
  updateEvents();
}));
search?.addEventListener('input', updateEvents);
