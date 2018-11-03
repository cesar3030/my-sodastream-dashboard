import { Refill } from '.';
import moment from 'moment-timezone';
import { timezone } from '../../config';

export default class RefillService {
  
  /**
   * Function that returns how many reffils were done for each day of the current week
   * @return {Object} The refills count for each day of the current week
   */
  static getCurrentWeekRefills() {
    const refillCount = {};

    for(let i=1; i<=7; i++){
      // weekday(i%6) because we want the dates from monday to sunday and sunday's index is 0.
      const date = moment().tz(timezone).seconds(0).hours(0).minutes(0).weekday(i%7).format('YYYY-MM-DD');
      refillCount[date] = 0;
    }

    return Refill.find({ createdAt: {$gte: moment().tz(timezone).seconds(0).hours(0).minutes(0).weekday(1).utc()}})
      .then((refills) => refills.map((refill) => refill.view()))
      .then((refillsUtc) => refillsUtc.map((refill) => ({...refill, createdAt: moment(refill.createdAt).tz(timezone).format("YYYY-MM-DD")})))
      .then((refills) => {
        refills.forEach((refill) => refillCount[refill.createdAt]++);
        return refillCount;
      })
  }

  /**
   * Function that returns how many reffils were during the current week
   * @return {Number} The refills count for the current week
   */
  static getCurrentWeekRefillsCount() {
    
  }

  /**
   * Function that returns how many reffils were done for each day of the current month
   * @return {Object} The refills count for each day of the current week
   */
  static getCurrentMonthRefills() {
    const refillCount = {};

    for(let i=1; i<=7; i++){
      // weekday(i%6) because we want the dates from monday to sunday and sunday's index is 0.
      const date = moment().tz(timezone).seconds(0).hours(0).minutes(0).weekday(i%7).format('YYYY-MM-DD');
      refillCount[date] = 0;
    }

    return Refill.find({ createdAt: {$gte: moment().tz(timezone).seconds(0).hours(0).minutes(0).weekday(1).utc()}})
      .then((refills) => refills.map((refill) => refill.view()))
      .then((refillsUtc) => refillsUtc.map((refill) => ({...refill, createdAt: moment(refill.createdAt).tz(timezone).format("YYYY-MM-DD")})))
      .then((refills) => {
        refills.forEach((refill) => refillCount[refill.createdAt]++);
        return refillCount;
      })
  }

  /**
   * Function that returns how many reffils were done during the current month
   * @return {Number} The refills count for the current month
   */
  static getCurrentMonthRefillsCount() {

  }

  /**
   * Function that returns how many reffils were done for each day of the current year
   * @return {Object} The refills count for each day of the current week
   */
  static getCurrentYearRefills() {
    const refillCount = {};

    for(let i=1; i<=7; i++){
      // weekday(i%6) because we want the dates from monday to sunday and sunday's index is 0.
      const date = moment().tz(timezone).seconds(0).hours(0).minutes(0).weekday(i%7).format('YYYY-MM-DD');
      refillCount[date] = 0;
    }

    return Refill.find({ createdAt: {$gte: moment().tz(timezone).seconds(0).hours(0).minutes(0).weekday(1).utc()}})
      .then((refills) => refills.map((refill) => refill.view()))
      .then((refillsUtc) => refillsUtc.map((refill) => ({...refill, createdAt: moment(refill.createdAt).tz(timezone).format("YYYY-MM-DD")})))
      .then((refills) => {
        refills.forEach((refill) => refillCount[refill.createdAt]++);
        return refillCount;
      })
  }

  /**
   * Function that returns how many reffils were done during the current year
   * @return {Number} The refills count for the current year
   */
  static getCurrentYearRefillsCount() {
    const firstDayOfTheYearUtc = moment().tz(timezone).month(0).day(0).seconds(0).hours(0).minutes(0).utc()
    return Refill.count({ createdAt: { $gte: firstDayOfTheYearUtc } });
  } 
}
