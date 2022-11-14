import { Notify } from 'notiflix/build/notiflix-notify-aio';

const form = document.querySelector('form');
form.addEventListener('submit', submitForm);
function submitForm(evt) {
  evt.preventDefault();
  const { delay, amount, step } = evt.target.elements;
  let delayVal = Number(delay.value);
  for (let i = 0; i < amount.value; i += 1) {
    createPromise(i, delayVal)
      .then(({ position, delay }) => {
        Notify.success(`✅ Fulfilled Promise ${position} in ${delay}ms`, {
          opacity: 0.8,
          timeout: 500,
          position: 'center-center',
          cssAnimationDuration: 500,
          backOverlay: true,
          backOverlayColor: 'rgba(50,220,130,0.2)',
        });
      })
      .catch(({ position, delay }) => {
        Notify.failure(`❌ Rejected Promise ${position} in ${delay}ms`, {
          opacity: 0.8,
          position: 'center-center',
          timeout: 500,
          backOverlay: true,
          cssAnimationDuration: 500,
          backOverlayColor: 'rgba(255,85,73,0.2)',
        });
      });
    delayVal += Number(step.value);
  }
  evt.target.reset();
}

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
}
