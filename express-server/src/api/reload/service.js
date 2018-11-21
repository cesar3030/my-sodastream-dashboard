import { Reload } from '.';

export default class ReloadService {
  static getCurrentReloadState() {
    ReloadService.getReloadsStats()
  }

  /**
   * Function that returns the reload stats: average nb
   * @return {Number} The average refill elapsed time in seconds
   */
  static getReloadsStats(){
    return Reload.aggregate()
      .group({
        _id: "null", 
        timeUsageAvg: { $avg: "$timeUsage"},
        refillCountAvg: { $avg: "$refillCount"},
      })
      .then((res) => res && res.length > 0 ? res[0] : {})
  }
}
