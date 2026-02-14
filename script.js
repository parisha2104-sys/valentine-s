// Show Yes Page
function showYes() {
  document.getElementById('yesPage').style.display = 'block';
  document.getElementById('noPage').style.display = 'none';

  const music = document.getElementById('bgMusic');
  music.play().catch(() => console.log("Autoplay blocked"));

  startTypingQuotes();

  // Show 3rd slide (vintage letter) after 2 seconds
  setTimeout(() => {
    document.getElementById('slide3').style.display = 'block';
    document.getElementById('slide3').scrollIntoView({behavior: "smooth"});
  }, 2000);
}

// Show No Page
function showNo() {
  document.getElementById('noPage').style.display = 'block';
  document.getElementById('yesPage').style.display = 'none';
}

// Typing Quotes
function startTypingQuotes() {
  const quotes = document.querySelectorAll('.quote');
  quotes.forEach(q => {
    const text = q.getAttribute('data-text');
    let index = 0;
    q.textContent = '';
    const interval = setInterval(() => {
      q.textContent += text[index];
      index++;
      if(index >= text.length) clearInterval(interval);
    }, 50);
  });
}

// Lightbox
function openLightbox(img) {
  document.getElementById('lightbox').style.display = 'flex';
  document.getElementById('lightbox-img').src = img.src;
}
function closeLightbox() {
  document.getElementById('lightbox').style.display = 'none';
}

// Auto-play music on first click anywhere
document.body.addEventListener('click', function playOnce() {
  const music = document.getElementById('bgMusic');
  music.play().catch(()=>console.log("Autoplay blocked"));
  document.body.removeEventListener('click', playOnce);
});
