var cyclic = require("../index");

describe("initial", function(){

    it("masterSolution should be described", function(){
    
        expect(cyclic.masterSolution).toBeDefined();
    })

    it("should rotate for 1", function(){
        expect(cyclic.masterSolution([2,3],1)).toEqual([3,2]);
        expect(cyclic.masterSolution([2,3,4],2)).toEqual([3,4,2]);
        expect(cyclic.masterSolution([2,3,4,5],2)).toEqual([4,5,2,3]);
        expect(cyclic.masterSolution([2,3,4,5],3)).toEqual([3,4,5,2]);
    });

    it("should rotate so hard", function(){

        console.time("masterSolution");
        expect(cyclic.masterSolution(prepareArray(),5)).toEqual(prepareTestResult());
        console.timeEnd("masterSolution");
    
    });

    var prepareArray = function(){
        var A = [];

        for (var i=0; i < 100; ++i) {
            
            A[i] = i;
        }
        return A;
    
    }

    var prepareTestResult = function(){
        var A = [];
        for (var i=0; i < 5; ++i) {
            
            A[i] = 95+i;
        }
    
        for (var i=5; i < 100; ++i) {
            
            A[i] = i-5;
        }

        return A;
    }
});
