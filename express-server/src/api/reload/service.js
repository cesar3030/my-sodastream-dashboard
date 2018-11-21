import { Reload } from '.';

export default class ReloadService {
  /**
   * Function that returns the statistics of the reloads and the current reload.
   * @returns {Object} The object returned contains:
   *  - All the info of the current reload
   *  - All the reloads stats (Average time use and Average refills count)
   *  - The time usage percentage (current reload comparatated to average time usage)
   *  - The refill count percentage (current refill count comparatated to average refill count)
   *  - The overall usage of the current reload
   */
  static getCurrentReloadStats() {
    return ReloadService.getReloadsStats().then((stats) => {
      return ReloadService.getCurrentReload()
        .then((currentReload) => {
          const refillCountPercentage = (currentReload.refillCount * 100) / stats.refillCountAvg;
          const timeUsagePercentage = (currentReload.timeUsage * 100) / stats.timeUsageAvg;
          const overAllUsagePercentage = (refillCountPercentage + timeUsagePercentage) / 2;
          
          return {
            ...currentReload,
            stats,
            timeUsagePercentage,
            refillCountPercentage,
            overAllUsagePercentage
          }
        })
    })
  }

  /**
   * Function that returns the reload corresponding to the carbonator currently installed in the sodastream machine.
   * @return {Object} The current Reload
   */
  static getCurrentReload() {
    return Reload.findOne()
      .sort({ field: 'asc', _id: -1 })
      .limit(1)
      .then((reload) => reload.view())
  }

  /**
   * Function that returns the reload average time usage and average number of refills.
   * @return {Object} {timeUsageAvg: Number, refillCountAvg: Number}
   */
  static getReloadsStats(){
    return Reload.aggregate()
      .match({
        endDate: { $ne: null }
      })
      .group({
        _id: "null", 
        timeUsageAvg: { $avg: "$timeUsage" },
        refillCountAvg: { $avg: "$refillCount" },
      })
      .then((res) => res && res.length > 0 ? res[0] : {})
  }
}
