import { TargetDate } from './grid.models';

export enum dayNames {
    Sunday,
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday
}

export enum monthNames {
    January,
    February,
    March,
    April,
    May,
    June,
    July,
    August,
    September,
    October,
    November,
    December
}
export const dayHours = 24;
export const rowSize = 70;

export const defaultDay: TargetDate = { day: 0, dayName: '', monthName: '', year: 1999, date: new Date(1999, 1, 1) };
