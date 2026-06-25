const { suma } = require('../src/ejemplo'); //importamos suma de nuestra función original test('suma 1 + 2 es 3', () => { expect(suma(1, 2)).toBe(3); }); //probamos suma con los parámetros 1,2 y el comparador toBe con el resultado esperado 
test.each([
 [1,2,3],
 [-20,-20,-40],
 [ 5, 5, 10]
])('%i + %i = %i', (a,b, esperado) => { 
    expect(suma(a, b)).toBe(esperado); 
}); 

test.each([
    ["a" , 5, "error"],
    [5 , "52", "error"],
    ["a" , "5", "error"]

   ])('%p + %p = %p', (a,b, esperado)=>{
    expect(()=>suma(a,b)).toThrow(esperado);
   })
