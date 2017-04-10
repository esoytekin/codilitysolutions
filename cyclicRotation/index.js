'use strict'
var solution = function solution (A,K) {
    
    for (var i=0; i < K; ++i) {
        rotate(A);
    }

    return A;
}

var rotate = function(A){

    var tempElem1=A[0];
    var tempElem2;
    for (var i=0; i < A.length; ++i) {
        if(i == A.length-1){
            tempElem2 = A[0];
            A[0] = tempElem1;
            
        } else {
            tempElem2 = A[i+1];
            A[i+1] = tempElem1;
        
        }
        tempElem1 = tempElem2;

    }

    return A;
}

var masterSolution = function (A, K) {
    K = K % A.length;
    if (A.length === 0 || A.length === 1 || K === 0) {
        return A;
    }

    let part = A.splice(A.length - K);
    return part.concat(A);
}

exports.solution = solution;
exports.masterSolution = masterSolution
