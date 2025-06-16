function showGreeting() {
  const receiver = document.getElementById('receiverInput').value.trim();
  const sender = document.getElementById('senderInput').value.trim();
  const music = document.getElementById('music');

  if (receiver && sender) {
    document.getElementById('receiverName').textContent = receiver;
    document.getElementById('senderName').textContent = sender;
    document.getElementById('formSection').style.display = 'none';
    document.getElementById('greetingCard').classList.remove('hidden');

    music.play().catch(() => alert("Klik halaman agar musik dapat diputar"));

    const duration = music.duration * 1000 || 30000;
    const interval = setInterval(() => {
      createHeart();
    }, 200);

    setTimeout(() => {
      clearInterval(interval);
    }, duration);

  } else {
    alert('Isi kedua nama terlebih dahulu!');
  }
}

function createHeart() {
  const heart = document.createElement('div');
  heart.classList.add('heart');
  heart.style.left = Math.random() * 100 + 'vw';
  heart.style.top = Math.random() * 100 + 'vh';
  document.body.appendChild(heart);
  setTimeout(() => heart.remove(), 4000);
}
