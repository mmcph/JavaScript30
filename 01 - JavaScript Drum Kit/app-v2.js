let drumKeys = Array.from(document.getElementsByClassName('key'));
let drumSounds = Array.from(document.getElementsByTagName('audio'));

document.addEventListener('keypress', (e) => {
  let pressedGlyph = (e.key).toUpperCase();
  drumKeys.forEach((item, i) => {
    if (pressedGlyph === item.firstChild.nextSibling.innerText) {
      item.classList.add('playing');
      playSound(i);
      window.setTimeout(() => {
        item.classList.remove('playing');
      }, 80);
    }
  });
});

function playSound(i) {
  drumSounds[i].load();     
  drumSounds[i].play();
}