function showYes() {
  document.getElementById('yesPage').style.display = 'block';
  document.getElementById('noPage').style.display = 'none';

  // Play background music on first click
  const music = document.getElementById('bgMusic');
  music.play().catch(() => {
    console.log("Autoplay blocked, user interaction required.");
  });

  startHearts();
  startConfetti();
}


function showNo() {
  document.getElementById('noPage').style.display = 'block';
  document.getElementById('yesPage').style.display = 'none';
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
