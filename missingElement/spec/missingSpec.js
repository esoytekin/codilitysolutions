var missing = require("../missing.js");

describe("first tests",function(){

    it("solution should exist",function(){
        expect(missing.solution).toBeDefined();
        
    
    });

    xit("should sort correctly",function(){
        expect(missing.solution([4,2,3,1])).toEqual([1,2,3,4]);
    });

    it("should return missing",function(){
        expect(missing.solution([4,3,1])).toEqual(2);
    
    });

    it("should return missing",function(){
        expect(missing.solution([4,3,1,2,5,7,8,9])).toEqual(6);
    
    });
    it("should return 1 for empty",function(){
        expect(missing.solution([])).toEqual(1);
    
    });
    it("should return 1 for 2",function(){
        expect(missing.solution([2])).toEqual(1);
    
    });

});
