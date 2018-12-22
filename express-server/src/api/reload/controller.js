import { success, notFound } from '../../services/response/'
import { Reload } from '.'
import ReloadService from './service'

export const create = ({ body }, res, next) =>
  Reload.create(body)
    .then((newReload) => newReload.view(true))
    .then((newReload) => {
      ReloadService.endPreviousReload(newReload)
      return newReload;
    })
    .then(success(res, 201))
    .catch(next)

export const index = ({ querymen: { query, select, cursor } }, res, next) =>
  Reload.find(query, select, cursor)
    .then((reloads) => reloads.map((reload) => reload.view()))
    .then(success(res))
    .catch(next)

export const toEnd = ({ querymen: { query, select, cursor } }, res, next) =>
  Reload.findOne({endDate : undefined})
    .sort({ field: 'asc', _id: 1 })
    .limit(1)
    .then((reload) => reload.view())
    .then(success(res))
    .catch(next)

export const show = ({ params }, res, next) =>
  Reload.findById(params.id)
    .then(notFound(res))
    .then((reload) => reload ? reload.view() : null)
    .then(success(res))
    .catch(next)

export const update = ({ body, params }, res, next) =>
  Reload.findById(params.id)
    .then(notFound(res))
    .then((reload) => reload ? Object.assign(reload, body).save() : null)
    .then((reload) => reload ? reload.view(true) : null)
    .then(success(res))
    .catch(next)

export const destroy = ({ params }, res, next) =>
  Reload.findById(params.id)
    .then(notFound(res))
    .then((reload) => reload ? reload.remove() : null)
    .then(success(res, 204))
    .catch(next)

export const currentReloadStats = ({}, res, next) =>
  ReloadService.getCurrentReloadStats()
    .then(success(res))
    .catch(next)

export const currentReload = ({}, res, next) =>
  ReloadService.getCurrentReload()
    .then(success(res))
    .catch(next)
