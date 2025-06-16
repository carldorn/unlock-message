var heart = document.getElementById('heart'),
    heartW = heart.offsetWidth,
    heartH = heart.offsetHeight;

// Membuat elemen audio untuk efek suara
var sound = new Audio("https://files.catbox.moe/v0kbw8.mp3");

// Fungsi untuk memainkan audio saat pertama kali interaksi (klik/tap)
function initAudio() {
  sound.play().catch(e => console.log("Audio belum bisa diputar:", e));
  document.removeEventListener('click', initAudio);
  document.removeEventListener('touchstart', initAudio);
}

// Set event listener untuk pertama kali klik/tap
document.addEventListener('click', initAudio);
document.addEventListener('touchstart', initAudio); // Untuk perangkat touch

document.body.onmousemove = function(event) {
  var x = event.clientX - (heartW / 2);
  var y = event.clientY - (heartH / 2);
  
  heart.style.transform = "translate(" + x + "px, " + y + "px) rotate(-45deg)";
  
  // Memainkan suara setiap kali mouse bergerak (opsional)
  // sound.currentTime = 0;
  // sound.play().catch(e => {});
}