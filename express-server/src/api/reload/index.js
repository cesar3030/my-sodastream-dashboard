import { Router } from 'express'
import { middleware as query } from 'querymen'
import { create, index, show, update, destroy, currentReloadState } from './controller'
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
 * @api {get} /reloads/current/state Retrieve current carbonator reload's state
 * @apiName RetrieveCurrentReloadState
 * @apiGroup Reload
 * @apiUse listParams
 * @apiSuccess {Object} The reload state.
 * @apiError {Object} 400 Bad request.
 */
router.get('/current/state',
  currentReloadState)

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
