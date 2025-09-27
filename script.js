// Set the current year in the footer
document.getElementById('yr').textContent = new Date().getFullYear();

// Lookbook scroller functionality
const lookbook = document.getElementById('lookbook-scroll');
if (lookbook) {
  const prevBtn = document.querySelector('.scroll-btn.prev');
  const nextBtn = document.querySelector('.scroll-btn.next');
  const itemWidth = 260 + 12; // lb-item width + gap

  nextBtn.addEventListener('click', () => {
    lookbook.scrollBy({ left: itemWidth, behavior: 'smooth' });
  });

  prevBtn.addEventListener('click', () => {
    lookbook.scrollBy({ left: -itemWidth, behavior: 'smooth' });
  });
}