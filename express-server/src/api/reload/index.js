import { Router } from 'express'
import { middleware as query } from 'querymen'
import { create, index, show, update, destroy, currentReloadStats, currentReload } from './controller'
export Reload, { schema } from './model'

const router = new Router()

/**
 * @api {post} /reloads Create a carbonator reload
 * @apiName CreateReload
 * @apiGroup Reload
 * @apiSuccess {Object} reload Reload's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Reload not found.
 */
router.post('/',
  create)

/**
 * @api {get} /reloads/current Retrieve current carbonator reload
 * @apiName RetrieveCurrentReload
 * @apiGroup Reload
 * @apiUse listParams
 * @apiSuccess {Object} The reload.
 * @apiError {Object} 400 Bad request.
 */
router.get('/current',
  currentReload)

/**
 * @api {get} /reloads/current/stats Retrieve current carbonator reload stats that includes percentage of use.
 * @apiName RetrieveCurrentReloadStats
 * @apiGroup Reload
 * @apiUse listParams
 * @apiSuccess {Object} The reload stats.
 * @apiError {Object} 400 Bad request.
 */
router.get('/current/stats',
  currentReloadStats)

/**
 * @api {get} /reloads Retrieve carbonator reloads
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
 * @api {get} /reloads/:id Retrieve a carbonator reload by id
 * @apiName RetrieveReload
 * @apiGroup Reload
 * @apiSuccess {Object} reload Reload's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Reload not found.
 */
router.get('/:id',
  show)

/**
 * @api {put} /reloads/:id Update carbonator reload
 * @apiName UpdateReload
 * @apiGroup Reload
 * @apiSuccess {Object} reload Reload's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Reload not found.
 */
router.put('/:id',
  update)

/**
 * @api {delete} /reloads/:id Delete a carbonator reload
 * @apiName DeleteReload
 * @apiGroup Reload
 * @apiSuccess (Success 204) 204 No Content.
 * @apiError 404 Reload not found.
 */
router.delete('/:id',
  destroy)

export default router
