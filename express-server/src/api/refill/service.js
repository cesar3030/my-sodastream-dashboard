import { Refill } from '.';
import moment from 'moment-timezone';
import { timezone } from '../../config';
import TimezoneDate from "../../services/timezone-date";

export default class RefillsService {

  /**
   * Function that returns the average refill elapsed time
   * @return {Number} Key:value -> String:Number -> "YYYY-MM-DD":count
   */
  static getAverageRefillElapsedTime() {
    return Refill.aggregate([{$group:{_id: "null", elapsedTimeAvg: { $avg: "$elapsedTime"}}}])
  }

  /**
   * Function that returns how many refills were done for each day of the current week
   * @return {Object} Key:value -> String:Number -> "YYYY-MM-DD":count
   */
  static getCurrentWeekRefillsPerDate() {
    const startDate = TimezoneDate.getFirstDateOfCurrentWeek();
    const endDate = TimezoneDate.getLastDateOfCurrentWeek();
    return RefillsService.getRefillsPerDatesBetweenDates(startDate, endDate);
  }

  /**
   * Function that returns how many refills were during the current week
   * @return {Number} The refills count for the current week
   */
  static getCurrentWeekRefillsCount() {
    const startDate = TimezoneDate.getFirstDateOfCurrentWeek();
    const endDate = TimezoneDate.getLastDateOfCurrentWeek();
    return RefillsService.getRefillsCountBetweenDates(startDate, endDate);
  }

  /**
   * Function that returns how many refills were done for each day of the current month
   * @return {Object} Key:value -> String:Number -> "YYYY-MM-DD":count
   */
  static getCurrentMonthRefillsPerDate() {
    const startDate = TimezoneDate.getFirstDateOfCurrentMonth();
    const endDate = TimezoneDate.getLastDateOfCurrentMonth();
    return RefillsService.getRefillsPerDatesBetweenDates(startDate, endDate);
  }

  /**
   * Function that returns how many refills were done during the current month
   * @return {Number} The refills count for the current month
   */
  static getCurrentMonthRefillsCount() {
    const startDate = TimezoneDate.getFirstDateOfCurrentMonth();
    const endDate = TimezoneDate.getLastDateOfCurrentMonth();
    return RefillsService.getRefillsCountBetweenDates(startDate, endDate);
  }

  /**
   * Function that returns how many refills were done for each day of the current year
   * @return {Object} Key:value -> String:Number -> "YYYY-MM-DD":count
   */
  static getCurrentYearRefillsPerDate() {
    const startDate = TimezoneDate.getFirstDateOfCurrentYear();
    const endDate = TimezoneDate.getLastDateOfCurrentYear();
    return RefillsService.getRefillsPerDatesBetweenDates(startDate, endDate);
  }

  /**
   * Function that returns how many refills were done during the current year
   * @return {Number} The refills count of the current year
   */
  static getCurrentYearRefillsCount() {
    const startDate = TimezoneDate.getFirstDateOfCurrentYear();
    const endDate = TimezoneDate.getLastDateOfCurrentYear();
    return RefillsService.getRefillsCountBetweenDates(startDate, endDate);
  } 

  /**
   * Function to genarate a date counter object to hold the number of refills per date.
   * @param {Moment} startDate The start date of the period we want to track
   * @param {Moment} endDate Then end date of the period we want to track
   * @return {Object} Key:value -> String:Number -> "YYYY-MM-DD":0
   */
  static generateDatesCounters(startDate, endDate) {
    const counter = {};
    let date = moment(startDate);
    
    while(date.isSameOrBefore(endDate)) {
      counter[date.format("YYYY-MM-DD")] = 0;
      date.add(1,'days');
    }

    return counter;
  }

  /**
   * Function that returns how many refills were done for each day between the two given dates.
   * @param {moment} startDate The start date in timezone.
   * @param {moment} endDate The end date in timezone.
   * @return {Object} Key:value -> String:Number -> "YYYY-MM-DD":count
   */
  static getRefillsPerDatesBetweenDates(startDate, endDate) {
    const refillsDateCount = RefillsService.generateDatesCounters(startDate, endDate);
    return Refill.find({
       createdAt: {
         $gte: startDate.utc(),
         $lte: endDate.utc()
        }
      })
      .then((refills) => refills.map((refill) => refill.view()))
      .then((refillsUtc) => refillsUtc.map((refill) => ({...refill, createdAt: moment(refill.createdAt).tz(timezone).format("YYYY-MM-DD")})))
      .then((refills) => {
        refills.forEach((refill) => {
          refillsDateCount[refill.createdAt]++;
        });
        return refillsDateCount;
      });
  }

  /**
   * Function that returns how many refills were done between the two given dates.
   * @param {moment} startDate The start date in timezone.
   * @param {moment} endDate The end date in timezone.
   * @return {Number} The refill count
   */
  static getRefillsCountBetweenDates(startDate, endDate) {
    return Refill.count({ 
      createdAt: {
        $gte: startDate.utc(),
        $lte: endDate.utc()
       } 
    });
  }
}
