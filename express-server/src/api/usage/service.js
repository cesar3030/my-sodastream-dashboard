import RefillsService from '../refill/service';

const bottleVolume = 840; // Sodastream volume size in ml

export default class UsageService {
  
  /**
   * Function that returns the volume of sparkling water made for each day of the current week.
   * @return {Object} Key:value -> String:Number -> "YYYY-MM-DD":volume
   */
  static getCurrentWeekUsagePerDate() {
    return RefillsService.getCurrentWeekRefillsPerDate()
      .then(UsageService.convertReffilsPerDateToUsage);
  }

  /**
   * Function that returns the volume of sparkling water made since the beginning of the current week.
   * @return {Number} Volume of sparkling water made for the current week
   */
  static getCurrentWeekUsageVolume() {
    return RefillsService.getCurrentWeekRefillsCount()
      .then(UsageService.convertReffilsCountToUsage);
  }

  /**
   * Function that returns the volume of sparkling water made for each day of the current month.
   * @return {Object} Key:value -> String:Number -> "YYYY-MM-DD":volume
   */
  static getCurrentMonthUsagePerDate() {
    return RefillsService.getCurrentMonthRefillsPerDate()
      .then(UsageService.convertReffilsPerDateToUsage);
  }

  /**
   * Function that returns the volume of sparkling water made for each day of the current month.
   * @return {Number} Volume of sparkling water made since the beginning of the current month.
   */
  static getCurrentMonthUsageVolume() {
    return RefillsService.getCurrentMonthRefillsCount()
      .then(UsageService.convertReffilsCountToUsage);
  }

  /**
   * Function that returns the volume of sparkling water made for each day of the current year.
   * @return {Object} Key:value -> String:Number -> "YYYY-MM-DD":volume
   */
  static getCurrentYearUsagePerDate() {
    return RefillsService.getCurrentYearRefillsPerDate()
      .then(UsageService.convertReffilsPerDateToUsage);
  }

  /**
   * Function that returns the volume of sparkling water made for each day of the current year.
   * @return {Number} Volume of sparkling water made since the beginning of the current year.
   */
  static getCurrentYearUsageVolume() {
    return RefillsService.getCurrentYearRefillsCount()
      .then(UsageService.convertReffilsCountToUsage);
  }

  /**
   * Function that returns the volume of sparkling water made for each day of the current year.
   * @return {Number} Volume of sparkling water made since the beginning of the current year.
   */
  static getCurrentUsage() {

  }

  /**
   * Method to mutate the refillsPerDate Object. The number of refills is converted to volume of sparkling water based on the size a sodastream bottle and number of refills.
   * @param {Object} refillsPerDate Key:value -> String:Number -> "YYYY-MM-DD":nbRefills
   * @return {Object} Key:value -> String:Number -> "YYYY-MM-DD":volume
   */
  static convertReffilsPerDateToUsage(refillsPerDate) {
    Object.keys(refillsPerDate).forEach((date) => {
      refillsPerDate[date] *= bottleVolume
    });

    return refillsPerDate;
  }

  /**
   * Method to convert refills count to usage volume
   * @param {Number} nbRefills The number of refills
   * @return {Number} The volume of sparkling water corresponding to the number of bottles refilled.
   */
  static convertReffilsCountToUsage(nbRefills) {
    return nbRefills * bottleVolume;
  }
}