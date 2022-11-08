

const calculator=require("./calculator");

 

test("Testing add",()=>{

    expect(calculator.add(4,2)).toBe(6)

});

 

test("Testing Product",()=>{

    expect(calculator.Product(2,6)).toBe(12)

});

 

test("Testing Divide",()=>{

    expect(calculator.Divide(20,5)).toBe(4)

});

test("Testing Divide",()=>{

    expect(calculator.Divide(20,0)).toBe(undefined)

});


test("Testing Subtract",()=>{

    expect(calculator.subtract(9,2)).toBe(7)

});