export interface TargetDate {
    day: number;
    dayName: string;
    monthName: string;
    year: number;
    date: Date;
}

export interface ScheduledAppointment {
    id?: string;
    eventName: string;
    start: Date;
    end: Date;
}

export interface RowScheduledAppointment extends ScheduledAppointment {
    position: string;
    height: string;
    column: number;
    rowStart: number;
    rowEnd: number;
}

export type CalendarMode = 'day' | 'week' | 'month';
