import RefillsService from '../refill/service';
import TimezoneDate from "../../services/timezone-date";

const bottleSize = 840; // Sodastream bottle size in ml

export default class UsageService {
  /**
   * Function that returns the quantity of sparkling water made each day of the current week
   * @return {Object} Key:value -> String:Number -> "YYYY-MM-DD":quantity
   */
  static getCurrentWeekUsagePerDate() {
    const startDate = TimezoneDate.getFirstDateOfCurrentWeek();
    const endDate = TimezoneDate.getLastDateOfCurrentWeek();
    return RefillsService.getRefillsPerDatesBetweenDates(startDate, endDate)
      .then(UsageService.toUsagePerDate);
  }

  /**
   * Method to mutate the refillsPerDate Object. The number of refills is converted in volume of sparkling water based on the size a sodastream bottle.
   * @param {Object} refillsPerDate Key:value -> String:Number -> "YYYY-MM-DD":nbRefills
   * @return {Object} Key:value -> String:Number -> "YYYY-MM-DD":quantity
   */
  static toUsagePerDate(refillsPerDate) {
    Object.keys(refillsPerDate).forEach((date) => {
      refillsPerDate[date] *= bottleSize
    });

    return refillsPerDate;
  }
}