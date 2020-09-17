// Find the maximum consecutive 1's in an array of 0's and 1's.
// Example:
// a) 00110001001110 - Output :3 [Max num of consecutive 1's is 3]
// b) 1000010001 - Output :1 [Max num of consecutive 1's is 1]


var find = function(num) {
    var max = 0;
    var count = 0;

    for (var i in num) {
        count = num[i] === 1 ? count + 1 : 0;
        if (count > max) {
            max = count;
        }
    }
    
    return max;
};

// o/p ->

// num=[0,0,1,1,0,0,0,1,0,0,1,1,1,0];
// document.write(find(num));
// o/p -> 3

// num=[1,0,0,0,0,1,0,0,0,1];
// document.write(find(num));
// o/p-> 1