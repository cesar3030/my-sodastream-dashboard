import { Router } from 'express'
import { middleware as query } from 'querymen'
import { 
  index, 
  currentWeekUsagePerDate, 
  currentWeekUsageVolume, 
  currentMonthUsagePerDate, 
  currentMonthUsageVolume 
} from './controller'

const router = new Router()

/**
 * @api {get} /usages Retrieve usages
 * @apiName RetrieveUsages
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
 * @apiName RetrieveUsagesCurrentWeekPerDate
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
 * @apiName RetrieveUsagesCurrentWeekVolume
 * @apiGroup Usage
 * @apiUse listParams
 * @apiSuccess {Number} Total Volume of sparkling water made.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 */
router.get('/currentWeek/volume',
query(),
currentWeekUsageVolume)

/**
 * @api {get} /usages/currentWeek Retrieve the volume of sparkling for each date of the current week
 * @apiName RetrieveUsagesCurrentMonthPerDate
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
 * @apiName RetrieveUsagesCurrentMonthVolume
 * @apiGroup Usage
 * @apiUse listParams
 * @apiSuccess {Number} Total Volume of sparkling water made.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 */
router.get('/currentMonth/volume',
  query(),
  currentMonthUsageVolume)

export default router