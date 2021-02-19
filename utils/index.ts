enum TimeUnit {
  DAY = "day",
}

export function getTimeDiffByUnit(target: number | string | Date, timeUnit?: TimeUnit) {
  const currentTime = new Date().getTime();
  const targetTime = new Date(target).getTime();
  let timeUnitConvertedToMs;

  switch (timeUnit) {
    case TimeUnit.DAY:
    default:
      timeUnitConvertedToMs = 24 * 60 * 60 * 1000;
  }

  return Math.round(Math.abs(currentTime - targetTime) / timeUnitConvertedToMs);
}
