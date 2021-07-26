const durationNumbers = {
  second: 1,
  minute: 60,
  hour: 60 * 60,
  day: 3600 * 24,
  year: 3600 * 24 * 365,
};

const singularStrings = {
  secondLabel: 'second',
  minuteLabel: 'minute',
  hourLabel: 'hour',
  dayLabel: 'day',
  yearLabel: 'year',
  nowLabel: 'now',
}

function getPlural(value, str) {
  return value > 1 ? str + 's' : str;
}

function getValue(duration, durationNumbers, str, formattedDuration) {
  const count = Math.floor(duration / durationNumbers);
  if(count <= 0) return [formattedDuration, duration];
  const difference = duration - (count * durationNumbers);
  let message = getPlural(count, str)
  formattedDuration += `${count} ${message} `;
  return [formattedDuration, difference];
}

function insertString(str) {
  const values = str.trim().split(' ');
  const length = values.length;
  if(length > 2) {
    for(let i = 0; i < length - 1; i++) {
      if(i === length - 2 ) {
        values.splice(length - 2, 0, 'and')
      } else if(isNaN(values[i]) && i <= length - 5) {
        values[i] = values[i] + ','
      }
    }
    const resultStr = values.join(' ');
    return resultStr;
  }
  return str
}

export function formatDuration(seconds) {
  let duration = seconds;
  let formattedDuration = '';
  const { year, day, hour, minute, second } = durationNumbers;
  const { yearLabel, dayLabel, hourLabel, minuteLabel, secondLabel, nowLabel } = singularStrings;
  let [formattedDuration1, difference1] = getValue(duration, year, yearLabel, formattedDuration);
  let [formattedDuration2, difference2] = getValue(difference1, day, dayLabel, formattedDuration1);
  let [formattedDuration3, difference3] = getValue(difference2, hour, hourLabel, formattedDuration2);
  let [formattedDuration4, difference4] = getValue(difference3, minute, minuteLabel, formattedDuration3);
  let [formattedDuration5] = getValue(difference4, second, secondLabel, formattedDuration4);
  formattedDuration5 = insertString(formattedDuration5)
  const trimmedDuration = formattedDuration5.trim();
  return trimmedDuration ? trimmedDuration : nowLabel;
}
