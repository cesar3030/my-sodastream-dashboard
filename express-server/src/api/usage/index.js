import { Router } from 'express'
import { middleware as query } from 'querymen'
import { index, currentWeekUsagePerDate } from './controller'

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
 * @apiSuccess {Object[]} usages List of usages.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 */
router.get('/currentWeek',
  query(),
  currentWeekUsagePerDate)

export default router
