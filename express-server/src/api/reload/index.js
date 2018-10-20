import { Router } from 'express'
import { middleware as query } from 'querymen'
import { create, index, show, update, destroy } from './controller'
export Reload, { schema } from './model'

const router = new Router()

/**
 * @api {post} /reloads Create reload
 * @apiName CreateReload
 * @apiGroup Reload
 * @apiSuccess {Object} reload Reload's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Reload not found.
 */
router.post('/',
  create)

/**
 * @api {get} /reloads Retrieve reloads
 * @apiName RetrieveReloads
 * @apiGroup Reload
 * @apiUse listParams
 * @apiSuccess {Object[]} reloads List of reloads.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 */
router.get('/',
  query(),
  index)

/**
 * @api {get} /reloads/:id Retrieve reload
 * @apiName RetrieveReload
 * @apiGroup Reload
 * @apiSuccess {Object} reload Reload's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Reload not found.
 */
router.get('/:id',
  show)

/**
 * @api {put} /reloads/:id Update reload
 * @apiName UpdateReload
 * @apiGroup Reload
 * @apiSuccess {Object} reload Reload's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Reload not found.
 */
router.put('/:id',
  update)

/**
 * @api {delete} /reloads/:id Delete reload
 * @apiName DeleteReload
 * @apiGroup Reload
 * @apiSuccess (Success 204) 204 No Content.
 * @apiError 404 Reload not found.
 */
router.delete('/:id',
  destroy)

export default router
