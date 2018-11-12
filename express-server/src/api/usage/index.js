import { Router } from 'express'
import { middleware as query } from 'querymen'
import { index, currentWeekUsagePerDate, currentWeekUsageCount } from './controller'

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
 * @api {get} /usages/currentWeek Retrieve usages each date of the current week
 * @apiName RetrieveUsagesCurrentWeekPerDate
 * @apiGroup Usage
 * @apiUse listParams
 * @apiSuccess {Object} volume of sparkling water for each date of the current week.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 */
router.get('/currentWeek',
  query(),
  currentWeekUsagePerDate)

/**
 * @api {get} /usages/currentWeek/count Retrieve for the current week the volume of sparkling water made
 * @apiName RetrieveUsagesCurrentWeekCount
 * @apiGroup Usage
 * @apiUse listParams
 * @apiSuccess {Number} Total Volume of sparkling water made the current week.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 */
router.get('/currentWeek/count',
query(),
currentWeekUsageCount)
export default router
