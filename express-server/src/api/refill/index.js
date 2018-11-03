import { Router } from 'express'
import { middleware as query } from 'querymen'
import { middleware as body } from 'bodymen'
import { create, index, show, update, destroy, currentWeekRefills } from './controller'
import { schema } from './model'
export Refill, { schema } from './model'

const router = new Router()
const { elapsedTime } = schema.tree

/**
 * @api {post} /refills Create refill
 * @apiName CreateRefill
 * @apiGroup Refill
 * @apiParam elapsedTime Refill's elapsedTime.
 * @apiSuccess {Object} refill Refill's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Refill not found.
 */
router.post('/',
  body({ elapsedTime }),
  create)

/**
 * @api {get} /refills Retrieve refills
 * @apiName RetrieveRefills
 * @apiGroup Refill
 * @apiUse listParams
 * @apiSuccess {Object[]} refills List of refills.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 */
router.get('/',
  query(),
  index)

/**
 * @api {get} /refills/currentWeek Retrieve the number of refills for each day of the current week
 * @apiName RetrieveCurrentWeekRefills
 * @apiGroup Refill
 * @apiUse listParams
 * @apiSuccess {Object} Key is the date of the week and value is the number of refills for that date.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 */
router.get('/currentWeek',
  currentWeekRefills)

/**
 * @api {get} /refills/currentWeek/count Retrieve the number of refills of the current week.
 * @apiName RetrieveCurrentWeekRefillsCount
 * @apiGroup Refill
 * @apiUse listParams
 * @apiSuccess {Number} The number of refills.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 */
router.get('/currentWeek/count',
  currentWeekRefillsCount)

/**
 * @api {get} /refills/currentMonth Retrieve the number of refills for each day of the current month.
 * @apiName RetrieveCurrentMonthRefills
 * @apiGroup Refill
 * @apiUse listParams
 * @apiSuccess {Object} Key is the date of the year and value is the number of refills for that date.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 */
router.get('/currentMonth',
  currentYearRefills)

/**
 * @api {get} /refills/currentMonth/count Retrieve the number of refills of the current month.
 * @apiName RetrieveCurrentMonthRefillsCount
 * @apiGroup Refill
 * @apiUse listParams
 * @apiSuccess {Number} The number of refills from the 1st of January up to now.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 */
router.get('/currentMonth/count',
  currentYearRefillsCount)

/**
 * @api {get} /refills/currentYear Retrieve the number of refills for each day of the current year
 * @apiName RetrieveCurrentYearRefills
 * @apiGroup Refill
 * @apiUse listParams
 * @apiSuccess {Object} Key is the date of the year and value is the number of refills for that date.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 */
router.get('/currentYear',
  currentYearRefills)

/**
 * @api {get} /refills/currentYear/count Retrieve the number of refills of the current month.
 * @apiName RetrieveCurrentYearRefillsCount
 * @apiGroup Refill
 * @apiUse listParams
 * @apiSuccess {Number} The number of refills from the 1st of January of the current year up to now.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 */
router.get('/currentYear/count',
  currentYearRefillsCount)

/**
 * @api {get} /refills/:id Retrieve refill
 * @apiName RetrieveRefill
 * @apiGroup Refill
 * @apiSuccess {Object} refill Refill's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Refill not found.
 */
router.get('/:id',
  show)

/**
 * @api {put} /refills/:id Update refill
 * @apiName UpdateRefill
 * @apiGroup Refill
 * @apiParam elapsedTime Refill's elapsedTime.
 * @apiSuccess {Object} refill Refill's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Refill not found.
 */
router.put('/:id',
  body({ elapsedTime }),
  update)

/**
 * @api {delete} /refills/:id Delete refill
 * @apiName DeleteRefill
 * @apiGroup Refill
 * @apiSuccess (Success 204) 204 No Content.
 * @apiError 404 Refill not found.
 */
router.delete('/:id',
  destroy)

export default router
