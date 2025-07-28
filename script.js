
document.addEventListener('DOMContentLoaded',()=> {
const envelopeBtn = document.getElementById('envelope-btn');
const envelopeScreen = document.getElementById('envelope-screen');
const mainContent = document.getElementById('main-content');
const audioPlayer = document.querySelector('audio');
const vinyl = document.querySelector('.vinyl');

envelopeBtn.addEventListener('click',() => {
  envelopeScreen.style.display='none';
  mainContent.classList.remove('hidden');
  launchConfetti();
});

function launchConfetti(){
  const duration = 1000;
  const end = Date.now() + duration;
  const colors = ['#00ff00', '#ff0000', '#0066ff'];
  const confetti = window.confetti || (() => {});
 
  (function frame() {
    confetti({
      particleCount: 5,
      angle: 60,
      spread: 55,
      origin: { x: 0 },
      colors: colors
    });
    confetti({
      particleCount: 5,
      angle: 120,
      spread: 55,
      origin: { x: 1 },
      colors: colors
    });
    if (Date.now() < end) {
      requestAnimationFrame(frame);
    }
  })();
}
if(audioPlayer && vinyl) {
audioPlayer.addEventListener('play', () => {
    vinyl.classList.add('spinning');
    });
      
audioPlayer.addEventListener('pause', () => {
    vinyl.classList.remove('spinning')
      });
    }
});
