const esMayuscula = require('../utils/esmayuscula');

test('comprobar si es mayuscula', () => {
    expect(esMayuscula("MADRID ES LA CAPITAL DE ESPAÑA")).toBe(true)
})

test('comprobar si no es mayuscula', () => {
    expect(esMayuscula("MADRID Es LA CAPITAL DE ESPAÑA")).toBe(false)
})