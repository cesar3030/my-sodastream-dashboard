import { Router } from 'express'
import { middleware as query } from 'querymen'
import { 
  index, 
  currentWeekUsagePerDate, 
  currentWeekUsageVolume, 
  currentMonthUsagePerDate, 
  currentMonthUsageVolume, 
  currentYearUsagePerDate, 
  currentYearUsageVolume 
} from './controller'

const router = new Router()

/**
 * @api {get} /usages Retrieve usages
 * @apiName RetrieveUsage
 * @apiGroup Usage
 * @apiUse listParams
 * @apiSuccess {Object[]} usages List of usages.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 */
router.get('/',
  query(),
  index)

/**
 * @api {get} /usages/currentWeek Retrieve the volume of sparkling for each date of the current week
 * @apiName RetrieveUsageCurrentWeekPerDate
 * @apiGroup Usage
 * @apiUse listParams
 * @apiSuccess {Object} The volume of sparkling water made for each date of the current week.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 */
router.get('/currentWeek',
  query(),
  currentWeekUsagePerDate)

/**
 * @api {get} /usages/currentWeek/count Retrieve the volume of sparkling water made since the beginning of the current week.
 * @apiName RetrieveUsageCurrentWeekVolume
 * @apiGroup Usage
 * @apiUse listParams
 * @apiSuccess {Number} Total Volume of sparkling water made.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 */
router.get('/currentWeek/volume',
query(),
currentWeekUsageVolume)

/**
 * @api {get} /usages/currentMonth Retrieve the volume of sparkling for each date of the current week
 * @apiName RetrieveUsageCurrentMonthPerDate
 * @apiGroup Usage
 * @apiUse listParams
 * @apiSuccess {Object} The volume of sparkling water made for each date of the current month.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 */
router.get('/currentMonth',
  query(),
  currentMonthUsagePerDate)

/**
 * @api {get} /usages/currentMonth/count Retrieve the volume of sparkling water made since the beginning of the current month.
 * @apiName RetrieveUsageCurrentMonthVolume
 * @apiGroup Usage
 * @apiUse listParams
 * @apiSuccess {Number} Total Volume of sparkling water made.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 */
router.get('/currentMonth/volume',
  query(),
  currentMonthUsageVolume)

/**
 * @api {get} /usages/currentYear Retrieve the volume of sparkling for each date of the current year
 * @apiName RetrieveUsageCurrentYearPerDate
 * @apiGroup Usage
 * @apiUse listParams
 * @apiSuccess {Object} The volume of sparkling water made for each date of the current year.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 */
router.get('/currentYear',
query(),
currentYearUsagePerDate)

/**
* @api {get} /usages/currentYear/count Retrieve the volume of sparkling water made since the beginning of the current year.
* @apiName RetrieveUsageCurrentYearVolume
* @apiGroup Usage
* @apiUse listParams
* @apiSuccess {Number} Total Volume of sparkling water made.
* @apiError {Object} 400 Some parameters may contain invalid values.
*/
router.get('/currentYear/volume',
query(),
currentYearUsageVolume)

export default router
