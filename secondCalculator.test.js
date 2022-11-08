
const Secondcalculator=require('./secondCalculator');

test ("testcase1",()=>{
expect(Secondcalculator.power(3,2)).toBe(9)
});

test ("testcase2",()=>{
expect(Secondcalculator.round(4.9)).toBe(5)
});
test ("testcase3",()=>{
expect(Secondcalculator.ceil(3.9)).toBe(4)
});