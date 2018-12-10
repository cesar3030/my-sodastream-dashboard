import moment from 'moment-timezone';
import { timezone } from '../../config';

/**
 * Utility class to manipulate dates in the configured timezone.
 */
export default class TimezoneDate {
  /**
   * Function to return the first day of the current week in timezone
   */
  static getFirstDateOfCurrentWeek() {
    const currentDate = moment().tz(timezone).hours(0).minutes(0).seconds(0).milliseconds(0);
    
    /*
    * We want weeks to start from Mondays but moment.js week start on Sundays.
    * If we to moment to return the monday of the current week it will return the date we expect unless it's sunday.
    * If it's sunday, it will return the next monday's date. To fix this behaviour, when the current day is Sunday, we go back in time to the previous sunday
    * that way when we will ask monday's date, it will return the right date.
    */
    if(currentDate.day() == 0) {
      currentDate.subtract(1, 'weeks');
    }

    return currentDate.day(1)
  }

  static getLastDateOfCurrentWeek() {
    const currentDate = moment().tz(timezone)
    
    if(currentDate.day() != 0) {
      currentDate.add(1, 'weeks');
    }

    return currentDate.day(0);
  }

  static getFirstDateOfCurrentMonth() {
    return moment().tz(timezone).startOf('month');
  }

  static getLastDateOfCurrentMonth() {
    return moment().tz(timezone).endOf('month');
  }

  static getFirstDateOfCurrentYear() {
    return moment().tz(timezone).startOf('year');
  }

  static getLastDateOfCurrentYear() {
    return moment().tz(timezone).endOf('year');
  }
}