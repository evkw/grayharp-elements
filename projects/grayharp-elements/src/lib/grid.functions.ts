import { TargetDate } from './grid.models';
import { dayNames, monthNames } from './date.constants';


export function getPeriod(hour) { return hour < 12 ? 'am' : 'pm'; }
export function getTwelveHour(hour) { return hour % 12 || 12; }
export function getDayName(date) { return dayNames[date.getDay()]; }
export function getMonthName(date) { return monthNames[date.getMonth()]; }

export function toTargetDate(date: Date): TargetDate {

  return {
    day: date.getDate(),
    dayName: getDayName(date),
    monthName: getMonthName(date),
    year: date.getFullYear(),
    date
  };
}

export function getWeekFromDate(date: Date, workWeek = false): Date[] {
  const d = new Date(date);
  const days = workWeek === true ? 5 : 7;
  const week = [];
  const monday = d.getDate() - d.getDay() + 1;
  d.setDate(monday);
  for (let i = 0; i < days; i++) {
    week.push(new Date(d));
    d.setDate(d.getDate() + 1);
  }

  return week;
}

export function getDaysOfMonth(date: Date) {
  const cellDayFunc = (index, day) => (index < day ? index + 1 : null);
  const lastDay = new Date(
    date.getFullYear(),
    date.getMonth() + 1,
    0
  ).getDate();

  return Array(35)
    .fill(null)
    .map((n, i) => ({
      cellId: cellDayFunc(i, lastDay),
      day: cellDayFunc(i, lastDay),
      selected: false
    }));
}