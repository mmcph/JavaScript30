// FAILURE V1

// let opened;
// document.getElementById('panels').addEventListener('click', (e) => {
//   let clicked = e.target;
//   opened = Array.from(document.getElementsByClassName('open'));
  
//   // if something else is open
//   if (opened[0] !== e.target && opened[0] !== e.target.parentElement && opened.length !== 0) {
//     console.log('ayy');
//     opened.forEach((item) => {
//       item.classList.remove('open');
//     });
//     opened = Array.from(document.getElementsByClassName('open'));
//   }
  
//   // if nothing is open
//   if (opened.length === 0) {
//     opened = Array.from(document.getElementsByClassName('open'));
//     if (!clicked.classList.contains('panel')) {
//       if (clicked.parentElement.classList.contains('open')) {
//         clicked.parentElement.classList.remove('open');
//       } else {
//         clicked.parentElement.classList.add('open');
//       }
//     } else if (clicked.classList.contains('open')) {
//       clicked.classList.remove('open');
//     } else {
//       clicked.classList.add('open');
//     }
//     return;
//   }
// });

// FAILURE V2

// let panels = Array.from(document.getElementsByClassName('panel'));
// document.getElementById('panels').addEventListener('click', (e) => {
//   let clicked = e.target;
//   panels.forEach((item) => {
//     item.classList.remove('open','open-active');
//   });
//   if (clicked.classList.contains('panel')) {
//     clicked.classList.add('open');
//     clicked.addEventListener('transitionend', (ev) => {
//       if (ev.propertyName !== 'transform') {
//         panels.forEach((item) => {
//           item.classList.remove('open','open-active');
//         });
//         clicked.classList.add('open','open-active');
//       }
//     });
//   } else {
//     clicked.parentElement.classList.add('open');
//     clicked.parentElement.addEventListener('transitionend', (ev) => {
//       if (ev.propertyName !== 'transform') {
//         panels.forEach((item) => {
//           item.classList.remove('open','open-active');
//         });
//         clicked.parentElement.classList.add('open','open-active');
//       }
//     });
//   }
// });

// ATTEMPT 3


let panels = Array.from(document.getElementsByClassName('panel'));
panels.forEach(item => item.addEventListener('click', toggleOpen));
panels.forEach(item => item.addEventListener('transitionend', (e) => {toggleActive(e)}));

function toggleOpen() {
  panels.forEach(item => item.classList.remove('open'));
  this.classList.toggle('open');
}

function toggleActive(e) {
  if (e.propertyName === 'flex-grow') {
    e.target.classList.toggle('open-active');
  }
}