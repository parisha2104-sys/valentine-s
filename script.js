let musicPlayed = false;
// Play music on first click anywhere on page
document.body.addEventListener('click', function playOnce() {
  const music = document.getElementById('bgMusic');
  music.play().catch(()=>console.log("Autoplay blocked"));
  document.body.removeEventListener('click', playOnce); // remove listener after first click
});

// Show Yes Page
function showYes() {
  document.getElementById('yesPage').style.display = 'block';
  document.getElementById('noPage').style.display = 'none';

  const music = document.getElementById('bgMusic');
  music.play().catch(() => console.log("Autoplay blocked")); // music will start after Yes click

  startHearts();
  startConfetti();
  startTypingQuotes();
}



// Show No Page
function showNo() {
  document.getElementById('noPage').style.display = 'block';
  document.getElementById('yesPage').style.display = 'none';
}

// Toggle Music
function toggleMusic(){
  const music = document.getElementById('bgMusic');
  if(music.paused) music.play();
  else music.pause();
}

// Typing animation for quotes
function startTypingQuotes(){
  const quotes = document.querySelectorAll('.quote');
  quotes.forEach(quote=>{
    const text = quote.getAttribute('data-text');
    let index = 0;
    quote.innerHTML = '';
    const interval = setInterval(()=>{
      quote.innerHTML += text[index];
      index++;
      if(index >= text.length) clearInterval(interval);
    }, 60);
  });
}

/* Hearts */
function startHearts() {
  for(let i=0;i<50;i++) createHeart();
}
function createHeart(){
  const heart = document.createElement('div');
  heart.className='heart';
  heart.style.left=Math.random()*100+'vw';
  heart.style.animationDuration=(3+Math.random()*3)+'s';
  heart.innerHTML='❤️';
  document.body.appendChild(heart);
  setTimeout(()=>heart.remove(),5000);
}
setInterval(createHeart,500);

/* Confetti */
function startConfetti(){
  for(let i=0;i<100;i++) createConfetti();
  setInterval(createConfetti,300);
}
function createConfetti(){
  const conf = document.createElement('div');
  conf.className='confetti';
  conf.style.left=Math.random()*100+'vw';
  conf.style.background = ['#ff69b4','#ff1493','#ffb6c1','#fff0f5'][Math.floor(Math.random()*4)];
  document.body.appendChild(conf);
  let top = 0;
  const interval = setInterval(()=>{
    top+=2+Math.random()*3;
    conf.style.top = top+'px';
    if(top>window.innerHeight){
      conf.remove();
      clearInterval(interval);
    }
  },20);
}

/* Lightbox Image Popup */
function openLightbox(img){
  const lightbox = document.getElementById('lightbox');
  const lbImg = document.getElementById('lightbox-img');
  lbImg.src = img.src;
  lightbox.style.display = 'flex';
}
function closeLightbox(){
  document.getElementById('lightbox').style.display = 'none';
}

/* Cursor heart trail */
document.addEventListener('mousemove', e=>{
  const trail = document.createElement('div');
  trail.className = 'heart';
  trail.style.left = e.clientX + 'px';
  trail.style.top = e.clientY + 'px';
  document.body.appendChild(trail);
  setTimeout(()=>trail.remove(), 1000);
});
