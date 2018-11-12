import RefillsService from '../refill/service';

const bottleVolume = 840; // Sodastream volume size in ml

export default class UsageService {
  
  /**
   * Function that returns the quantity of sparkling water made each day of the current week
   * @return {Object} Key:value -> String:Number -> "YYYY-MM-DD":quantity
   */
  static getCurrentWeekUsagePerDate() {
    return RefillsService.getCurrentWeekRefillsPerDate()
      .then(UsageService.convertReffilsPerDateToUsage);
  }

  /**
   * Function that returns the quantity of sparkling water made each day of the current week
   * @return {Number} Volume of sparkling water made for the current week
   */
  static getCurrentWeekUsageCount() {
    return RefillsService.getCurrentWeekRefillsCount()
      .then(UsageService.convertReffilsCountToUsage);
  }

  /**
   * Method to mutate the refillsPerDate Object. The number of refills is converted to volume of sparkling water based on the size a sodastream bottle and number of refills.
   * @param {Object} refillsPerDate Key:value -> String:Number -> "YYYY-MM-DD":nbRefills
   * @return {Object} Key:value -> String:Number -> "YYYY-MM-DD":quantity
   */
  static convertReffilsPerDateToUsage(refillsPerDate) {
    Object.keys(refillsPerDate).forEach((date) => {
      refillsPerDate[date] *= bottleVolume
    });

    return refillsPerDate;
  }

  /**
   * Method to convert refills count to usage count
   * @param {Number} nbRefills The number of refills for the current week
   * @return {Number} The volume of sparkling water corresponding to the number of bottles refilled.
   */
  static convertReffilsCountToUsage(nbRefills) {
    return nbRefills * bottleVolume;
  }
}