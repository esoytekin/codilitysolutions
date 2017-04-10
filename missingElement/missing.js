var solution = function(A){
    var maxElem = Math.max.apply(null,A);
    if(maxElem == -Infinity || maxElem == Infinity)
        maxElem = 0;


    var result = 0;
    for (var i=1; i <= maxElem; ++i) {
        result = result^( i^A[i-1] );
        
    }
    if(result == 0){
        return maxElem+1;
    }
    return result;

}

exports.solution = solution;
