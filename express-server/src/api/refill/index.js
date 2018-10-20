import { Router } from 'express'
import { middleware as query } from 'querymen'
import { middleware as body } from 'bodymen'
import { create, index, show, update, destroy } from './controller'
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
