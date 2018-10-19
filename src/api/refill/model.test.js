import { Refill } from '.'

let refill

beforeEach(async () => {
  refill = await Refill.create({ elapsedTime: 'test' })
})

describe('view', () => {
  it('returns simple view', () => {
    const view = refill.view()
    expect(typeof view).toBe('object')
    expect(view.id).toBe(refill.id)
    expect(view.elapsedTime).toBe(refill.elapsedTime)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })

  it('returns full view', () => {
    const view = refill.view(true)
    expect(typeof view).toBe('object')
    expect(view.id).toBe(refill.id)
    expect(view.elapsedTime).toBe(refill.elapsedTime)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })
})
