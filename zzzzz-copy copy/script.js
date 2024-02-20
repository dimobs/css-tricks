let starRating = document.querySelector('select')

starRating.addEventListener('change', e =>
  document.body.style.setProperty('--star-count', e.target.value),
)