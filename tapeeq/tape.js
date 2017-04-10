var solution = function (A) {//{{{
    var min=9999999999;
    for (var i=1; i < A.length; ++i) {
        var res = coreJob(A,i);
        if(res<min){
            min = res;
        }


    }
    return min;
}//}}}

var solutionT = function solutionT(A) {//{{{
    var size = A.length;
    A.sort(function(a,b){return a-b});

    var mid = Math.ceil( size/2 );

    return coreJob(A,mid);


}//}}}

var coreJob = function(A,pos){//{{{
    var b = A.slice();
    var firstA = b.splice(0,pos);


    var sumA = firstA.reduce(function(a,b){return a+b},0);
    var sumB = b.reduce(function(a,b){return a+b},0);


    return Math.abs(sumA-sumB);
    

}//}}}

exports.solution = solutionT;
