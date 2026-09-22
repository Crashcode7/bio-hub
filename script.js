// Fitur Copy Profile Link
const shareBtn = document.getElementById('share-btn');

shareBtn.addEventListener('click', () => {
    navigator.clipboard.writeText(window.location.href);

    const originalContent = shareBtn.innerHTML;

    shareBtn.innerHTML = '<i class="fas fa-check"></i> Copied!';
    shareBtn.style.background = 'rgba(34, 197, 94, 0.3)';

    setTimeout(() => {
        shareBtn.innerHTML = originalContent;
        shareBtn.style.background = '';
    }, 2000);
});

//Tombol Light Body
const themeToggleBtn = document.getElementById('theme-toggle');
const themeIcon = document.getElementById('theme-icon');

if (localStorage.getItem('theme') === 'light') {
  document.body.classList.add('light-mode');
  themeIcon.classList.replace('fa-sun', 'fa-moon');
}

themeToggleBtn.addEventListener('click', () => {
  document.body.classList.toggle('light-mode');
  
  if (document.body.classList.contains('light-mode')) {
    themeIcon.classList.replace('fa-sun', 'fa-moon');
    localStorage.setItem('theme', 'light');
  } else {
    themeIcon.classList.replace('fa-moon', 'fa-sun');
    localStorage.setItem('theme', 'dark');
  }
});

// Efek 3D Tilt untuk Link Card
const cards = document.querySelectorAll('.link-card');

cards.forEach(card => {
  card.addEventListener('mousemove', (e) => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    
    card.style.transform = `perspective(1000px) rotateX(${-y / 10}deg) rotateY(${x / 10}deg) translateY(-4px)`;
  });

  card.addEventListener('mouseleave', () => {
    card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px)';
  });
});

// Toggle Music Player
const musicBtn = document.getElementById('music-btn');
const bgMusic = document.getElementById('bg-music');
const musicIcon = musicBtn.querySelector('i');

musicBtn.addEventListener('click', () => {
  if (bgMusic.paused) {
    bgMusic.play();
    musicBtn.classList.add('playing');
    musicIcon.className = 'fas fa-pause';
  } else {
    bgMusic.pause();
    musicBtn.classList.remove('playing');
    musicIcon.className = 'fas fa-music';
  }
});
