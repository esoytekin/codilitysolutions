var test = require("../main.js");

describe("first test", function(){
    it("solution should exist", function(){
        expect(test.solution).toBeDefined();
    });

    it ("should work on example", function(){
        expect(test.solution(5,[3,4,4,6,1,4,4])).toEqual([3,2,2,4,2]);
    });

});
