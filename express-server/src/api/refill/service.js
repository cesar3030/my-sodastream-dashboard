import { Refill } from '.';
import moment from 'moment-timezone';
import { timezone } from '../../config';

export default class RefillService {
  static getCurrentWeekRefills() {
    const refillCount = {};
    
    for(let i=1; i<=7; i++){
      // weekday(i%6) because we want the dates starting from monday to sunday and sunday's index is 0.
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
   * Method that returns an object with the dates of the week as keys and 0 as values
   */
  static getRefillCounterForWeekDates() {    
    const refillCount = {};
    
    for(let i=1; i<=7; i++){
      // weekday(i%6) because we want the dates starting from monday to sunday and sunday's index is 0.
      const date = moment().tz(timezone).weekday(i%7).format('YYYY-MM-DD');
      refillCount[date] = 0;
    }

    return refillCount;
  }
}
