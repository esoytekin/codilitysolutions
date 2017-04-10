var odd = require('../index');
describe("Odd Occurencies", function(){
    it("expects solution to be defined", function(){
        expect(odd.solution).toBeDefined();
    });

    it("returns 7 as odd value",function(){
        var B = [9,3,9,3,9,7,9];
        expect(odd.solution(B)).toBe(7);
    });

    it("returns 4 as odd value",function(){
        var C = [4,5,5];
        expect(odd.solution(C)).toBe(4);
    })

});

describe("for big files", function(){

    it("should find solution",function(){
        var arr = [989989,8989898,234234234,234234234,8989898];
        expect(odd.solution(arr)).toBe(989989);

    })

});
