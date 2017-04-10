'use strict'
var solution = function (A,K) {
    if(A.length==K)
        return A;
    var B=[];
    for (var i=0; i < A.length; ++i) {
        var index = ( i+K )%A.length;
        B[i]=index;
    }

    var C=[];
    for (var i=0; i < B.length; ++i) {
        C[B[i]]=A[i];
    }

    return C;
}


var solutionWSplice = function(A,K) {
    if (K==A.length)
        return A;

    var index = K%A.length;

    var B = A.splice(A.length-index,index);
    return B.concat(A);
    
}

exports.solution = solutionWSplice;
