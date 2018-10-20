import request from 'supertest'
import { apiRoot } from '../../config'
import express from '../../services/express'
import routes, { Refill } from '.'

const app = () => express(apiRoot, routes)

let refill

beforeEach(async () => {
  refill = await Refill.create({})
})

test('POST /refills 201', async () => {
  const { status, body } = await request(app())
    .post(`${apiRoot}`)
    .send({ elapsedTime: 'test' })
  expect(status).toBe(201)
  expect(typeof body).toEqual('object')
  expect(body.elapsedTime).toEqual('test')
})

test('GET /refills 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}`)
  expect(status).toBe(200)
  expect(Array.isArray(body)).toBe(true)
})

test('GET /refills/:id 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}/${refill.id}`)
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(refill.id)
})

test('GET /refills/:id 404', async () => {
  const { status } = await request(app())
    .get(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})

test('PUT /refills/:id 200', async () => {
  const { status, body } = await request(app())
    .put(`${apiRoot}/${refill.id}`)
    .send({ elapsedTime: 'test' })
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(refill.id)
  expect(body.elapsedTime).toEqual('test')
})

test('PUT /refills/:id 404', async () => {
  const { status } = await request(app())
    .put(apiRoot + '/123456789098765432123456')
    .send({ elapsedTime: 'test' })
  expect(status).toBe(404)
})

test('DELETE /refills/:id 204', async () => {
  const { status } = await request(app())
    .delete(`${apiRoot}/${refill.id}`)
  expect(status).toBe(204)
})

test('DELETE /refills/:id 404', async () => {
  const { status } = await request(app())
    .delete(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})
