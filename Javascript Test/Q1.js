// Define an array of numbers (use any random numbers). 
// Write a program in Javascript to print only the even numbers of the array.
// Do not use any library functions, need to do via for loops only


var a = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    b = [];
 
for (var i = 0; i < a.length; ++i) { 
    if ((a[i] % 2) === 0) {
      b=a[i] + ',';
      document.write(b);
    }
}

// o/p-> 0,2,4,6,8,10