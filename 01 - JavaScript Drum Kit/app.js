let drums = Array.from(document.getElementsByClassName('key'));
let sounds = Array.from(document.getElementsByTagName('audio'));

function playing(item) {
  item.classList.add('playing');
}

function stopped(item) {
  window.setTimeout(() => {
    item.classList.remove('playing');
  }, 80);
}

function playSound(i) {
  sounds[i].load();     
  sounds[i].play();
}
 

document.addEventListener('keypress', (e) => {
  let pressed = e.key;
  let upper = pressed.toUpperCase();
  switch (upper) {
    case 'A':
      drums.forEach((item, i) => {
        if (item.firstChild.nextSibling.innerText === 'A') {
          playSound(i);
          playing(item);
          stopped(item);
        }
      });
      break;
    case 'S':
      drums.forEach((item, i) => {
        if (item.firstChild.nextSibling.innerText === 'S') {
          playSound(i);
          playing(item);
          stopped(item);
        }
      });
      break;
    case 'D':
      drums.forEach((item, i) => {
        if (item.firstChild.nextSibling.innerText === 'D') {
          playSound(i);
          playing(item);
          stopped(item);
        }
      });
      break;
    case 'F':
      drums.forEach((item, i) => {
        if (item.firstChild.nextSibling.innerText === 'F') {
          playSound(i);
          playing(item);
          stopped(item);
        }
      });
      break;
    case 'G':
      drums.forEach((item, i) => {
        if (item.firstChild.nextSibling.innerText === 'G') {
          playSound(i);
          playing(item);
          stopped(item);
        }
      });
      break;
    case 'H':
      drums.forEach((item, i) => {
        if (item.firstChild.nextSibling.innerText === 'H') {
          playSound(i);
          playing(item);
          stopped(item);
        }
      });
      break;
    case 'J':
      drums.forEach((item, i) => {
        if (item.firstChild.nextSibling.innerText === 'J') {
          playSound(i);
          playing(item);
          stopped(item);
        }
      });
      break;
    case 'K':
      drums.forEach((item, i) => {
        if (item.firstChild.nextSibling.innerText === 'K') {
          playSound(i);
          playing(item);
          stopped(item);
        }
      });
      break;
    case 'L':
      drums.forEach((item, i) => {
        if (item.firstChild.nextSibling.innerText === 'L') {
          playSound(i);
          playing(item);
          stopped(item);
        }
      });
      break;
    default:
      console.log(upper);
  }
});