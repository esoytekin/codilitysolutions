'use strict'
var solution = function solution(A) {
    var result = 0;
    for (var i in A) {
        var temp = result;
        result =result^A[i];
        //console.log(temp+ "^"+A[i]+": " + result);
    }
    return result;
}

exports.solution = solution;

