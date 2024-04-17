const esPalindromo = require('../utils/palindromo');

test('comprobar si es palindromo', () => {
    expect(esPalindromo("a lo loco lo coloco lola")).toBe("alol ocoloc ol ocol ol a")
})

test('comprobar si no es palindromo', () => {
    expect(esPalindromo("amigo en elfo")).not.toBe("a lo loco lo coloco lola")
})