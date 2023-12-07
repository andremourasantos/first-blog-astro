document.querySelector('.hamburguerMenu').addEventListener('click', () => {
  document.querySelectorAll('nav a').forEach(aEl => {
    aEl.classList.toggle('show');
  })
})