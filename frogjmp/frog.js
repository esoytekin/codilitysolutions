var solution = function(x,y,d){
    var distance = y-x;
    return Math.ceil(distance/d);

}

exports.solution = solution;
