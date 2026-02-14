// ================= SHOW YES =================
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

// ================= SHOW NO =================
function showNo() {
  document.getElementById('noPage').style.display = 'block';
  document.getElementById('yesPage').style.display = 'none';
}

// ================= TYPING QUOTES =================
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

// ================= LIGHTBOX =================
function openLightbox(img) {
  document.getElementById('lightbox').style.display = 'flex';
  document.getElementById('lightbox-img').src = img.src;
}
function closeLightbox() {
  document.getElementById('lightbox').style.display = 'none';
}

// ================= AUTOPLAY MUSIC ON FIRST CLICK =================
document.body.addEventListener('click', function playOnce() {
  const music = document.getElementById('bgMusic');
  music.play().catch(()=>console.log("Autoplay blocked"));
  document.body.removeEventListener('click', playOnce);
});
