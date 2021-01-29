const HOURS_PER_DAY = 24;
const MINUTES_PER_HOUR = 60;
const MINUTES_PER_DAY = HOURS_PER_DAY * MINUTES_PER_HOUR;

function timeOfDay(elapsedTime) {
  if (elapsedTime < 0) {
    elapsedTime = (elapsedTime % MINUTES_PER_DAY) + MINUTES_PER_DAY;
  } else {
    elapsedTime = elapsedTime % MINUTES_PER_DAY;
  }

  let hours = Math.floor(elapsedTime / MINUTES_PER_HOUR);
  let minutes = elapsedTime % MINUTES_PER_HOUR;

  return formatTime(hours, minutes);

}

function formatTime(hours, minutes) {
  return `${addZeroes(hours)}:${addZeroes(minutes)}`;
}

function addZeroes(num) {
  return num < 0 ? `0${num}` : String(num);
}

console.log(timeOfDay(-1437));
