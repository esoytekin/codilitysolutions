var cyclic = require("../cyclic2.js");

describe("initial", function(){
    afterAll(function(){
        //console.log("cyclic2Spec completed.");
    
    });

    it("solution should be described", function(){
        expect(cyclic.solution).toBeDefined();
    });

    it("should work on simple",function(){
        expect(cyclic.solution([2,3],1)).toEqual([3,2]);
    });
    
    it("should work on simple with 2 iter",function(){
        expect(cyclic.solution([2,3],2)).toEqual([2,3]);
    });
    
    it("should work on simple with 3 iter",function(){
        expect(cyclic.solution([1,2,3,4,5,6,7,8,9],2)).toEqual([8,9,1,2,3,4,5,6,7]);
    });
    it("should work on simple with 5 iter",function(){
        expect(cyclic.solution([2,3,4,5,6],8)).toEqual([4,5,6,2,3]);
    });
});
