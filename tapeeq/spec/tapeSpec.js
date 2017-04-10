var tape = require("../tape.js");

describe("simple",function () {
        
    it("should be defined",function () {
        expect(tape.solution).toBeDefined();
            
    });
    it("should work on simple",function () {
        expect(tape.solution([3,1,2,4,3])).toBe(1);
        expect(tape.solution([5,6,2,4,1])).toBe(4);
        expect(tape.solution([-10, -5, -3, -4, -5])).toBe(3);
        expect(tape.solution([-10, -20, -30, -40, 100])).toBe(20);
            
    });
});
