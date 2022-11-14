import flatpickr from 'flatpickr';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import 'flatpickr/dist/flatpickr.min.css';

let setTime = '';
let date = '';

const refs = {
  calendar: document.querySelector('input[type="text"]'),
  startBtn: document.querySelector('button[data-start]'),
  timeDay: document.querySelector('[data-days]'),
  timeHour: document.querySelector('[data-hours]'),
  timeMin: document.querySelector('[data-minutes]'),
  timeSec: document.querySelector('[data-seconds]'),
};

refs.startBtn.addEventListener('click', startTimer);
function startTimer() {
  Notify.success('Start', {
    opacity: 0.5,
    position: 'right-top',
    timeout: 1000,
    cssAnimationDuration: 800,
    backOverlay: true,
    backOverlayColor: 'rgba(50,200,130,0.2)',
    cssAnimationStyle: 'zoom',
  });
  const setTime = setInterval(() => {
    if (date > 0) {
      const { days, hours, minutes, seconds } = convert(date);

      refs.timeDay.textContent = `${days}`;
      refs.timeHour.textContent = `${hours}`;
      refs.timeMin.textContent = `${minutes}`;
      refs.timeSec.textContent = `${seconds}`;
    }
    if (date <= 0) {
      clearInterval(setTime);
    }
  }, 1000);
  refs.startBtn.disabled = true;
  refs.calendar.disabled = true;
}

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    clearInterval(setTime);
    const setId = setInterval(() => {
      date = selectedDates[0].getTime() - new Date().getTime();
      if (date <= 0) {
        clearInterval(setId);
        refs.startBtn.disabled = true;
        Notify.failure('Please choose a date in the future', {
          opacity: 0.5,
          position: 'right-top',
          timeout: 1000,
          backOverlay: true,
          cssAnimationDuration: 800,
          backOverlayColor: 'rgba(255,85,73,0.2)',
          cssAnimationStyle: 'zoom',
        });
        return;
      }
    }, 1000);

    refs.startBtn.disabled = false;
  },
};

flatpickr(refs.calendar, options);
refs.startBtn.disabled = true;

function addLeadingZero(value) {
  return String(value).padStart(2, '0');
}

function convert(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = addLeadingZero(Math.floor(ms / day));
  const hours = addLeadingZero(Math.floor((ms % day) / hour));
  const minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute));
  const seconds = addLeadingZero(
    Math.floor((((ms % day) % hour) % minute) / second)
  );

  return { days, hours, minutes, seconds };
}
