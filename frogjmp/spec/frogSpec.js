var frog = require("../frog.js");
describe("init",function () {
   it("should be defined",function () {
       expect(frog.solution).toBeDefined();
   });

   it("should work on simple",function () {
     expect(frog.solution(10,85,30)).toBe(3);
     expect(frog.solution(20,60,10)).toBe(4);  
     expect(frog.solution(2,60,10)).toBe(6);  
     expect(frog.solution(2,60,10)).toBe(6);  
     expect(frog.solution(2,2,10)).toBe(0);  
   });

});

