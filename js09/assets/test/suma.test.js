const { suma } = require('../scripts/suma');

// test("Prueba de 1 + 3 = 4", ()=>{} );
test("Prueba de 1 + 3 = 4", ()=>{
    expect( suma(1, 3)).toBe(4) ;
} );

test("Prueba de 1 + -15 = -14", ()=>{
    expect( suma(1, -15)).toBe(-14) ;
} );

test("Prueba de 2.51 + 0.01 = 2.52", ()=>{
    expect( suma(2.51, 0.01)).toBe(2.52) ;
} );

/* test("Prueba de 2.51 + 0.01 = 2.52", ()=>{
    expect( suma(2.51, 0.01)).toBeCloseTo(2.52) ;
} ); */

