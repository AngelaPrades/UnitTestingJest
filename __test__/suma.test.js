const sum = require('../utils/suma');

test('sumar 1 mas 2', () => {
    expect(sum(1, 2)).toBe(3)
})

test('sumar -3 mas -4', () => {
    expect(sum(-3, -4)).toBe(-7)
})
