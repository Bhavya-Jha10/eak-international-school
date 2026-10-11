
const toggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('.nav-links');
if (toggle && nav) {
  toggle.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(open));
    toggle.textContent = open ? '×' : '☰';
  });
  nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
    nav.classList.remove('open');
    toggle.setAttribute('aria-expanded', 'false');
    toggle.textContent = '☰';
  }));
}
document.querySelectorAll('[data-year]').forEach(el => el.textContent = new Date().getFullYear());

document.querySelectorAll('.faq-question').forEach(button => {
  button.addEventListener('click', () => {
    const item = button.closest('.faq-item');
    item.classList.toggle('open');
    button.setAttribute('aria-expanded', String(item.classList.contains('open')));
  });
});

// Frontend-only demo forms: validate fields and clearly explain that nothing is sent to a server.
document.querySelectorAll('[data-demo-form]').forEach(form => {
  form.addEventListener('submit', event => {
    event.preventDefault();
    if (!form.reportValidity()) return;
    const message = form.querySelector('.form-message');
    if (message) {
      message.textContent = 'Thank you! This is a frontend demo, so your details have not been sent. Connect a backend or form service before using this on a live school website.';
      message.classList.add('show');
    }
    form.reset();
  });
});
