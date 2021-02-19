enum TimeUnit {
  SECOND = "second",
  MINUTE = "minute",
  HOUR = "hour",
  DAY = "day",
  MONTH = "month",
  YEAR = "year",
}

enum MsTime {
  SECOND = 1000,
  MINUTE = 60 * 1000,
  HOUR = 60 * 60 * 1000,
  DAY = 24 * 60 * 60 * 1000,
  MONTH = 28 * 24 * 60 * 60 * 1000,
  YEAR = 365 * 24 * 60 * 60 * 1000,
}

/**
 * 시작이상, 끝미만인지 판단
 * 시작 생략시 시작은 0으로 지정됨
 * lodash isRange 참고
 * @param target
 * @param start or end
 * @param end
 */
function inRange(target: number, start: number, end?: number) {
  let _start = start;
  let _end = end;

  if (end === undefined) {
    _start = 0;
    _end = start;
  }

  if (target >= _start && target < _end) return true;

  return false;
}

export function getRoundedTime(
  target: number | string | Date,
  timeUnit: TimeUnit = TimeUnit.DAY
) {
  const targetTime = new Date(target).getTime();

  if (timeUnit === TimeUnit.SECOND) return Math.round(targetTime / MsTime.SECOND);
  if (timeUnit === TimeUnit.MINUTE) return Math.round(targetTime / MsTime.MINUTE);
  if (timeUnit === TimeUnit.HOUR) return Math.round(targetTime / MsTime.HOUR);
  if (timeUnit === TimeUnit.DAY) return Math.round(targetTime / MsTime.DAY);
  if (timeUnit === TimeUnit.MONTH) return Math.round(targetTime / MsTime.MONTH);
  if (timeUnit === TimeUnit.YEAR) return Math.round(targetTime / MsTime.YEAR);

  return Math.round(targetTime / MsTime.DAY);
}

export function getBeautifiedTimeDiffFromNow(targetTime: number | string | Date) {
  const currentTime = new Date().getTime();
  const timeDiffMs = currentTime - new Date(targetTime).getTime();

  let timeUnit: TimeUnit;

  if (inRange(timeDiffMs, MsTime.MINUTE)) {
    timeUnit = TimeUnit.SECOND;
  } else if (inRange(timeDiffMs, MsTime.MINUTE, MsTime.HOUR)) {
    timeUnit = TimeUnit.MINUTE;
  } else if (inRange(timeDiffMs, MsTime.HOUR, MsTime.DAY)) {
    timeUnit = TimeUnit.HOUR;
  } else if (inRange(timeDiffMs, MsTime.DAY, MsTime.MONTH)) {
    timeUnit = TimeUnit.DAY;
  } else if (inRange(timeDiffMs, MsTime.MONTH, MsTime.YEAR)) {
    timeUnit = TimeUnit.MONTH;
  } else {
    timeUnit = TimeUnit.YEAR;
  }

  const roundedTime = getRoundedTime(timeDiffMs, timeUnit)

  return `${roundedTime} ${timeUnit}${roundedTime >= 2 ? 's': ''} ago`;
}
