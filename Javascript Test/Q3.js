// Suppose you have an array of 101 integers. 
// This array is already sorted and all numbers in this array are consecutive. 
// Each number only occurs once in the array except one number which occurs twice. 
// Write a js code to find the repeated number.
// e.g $arr = array(0,1,2,3,4,5,6,7,7,8,9,10...................);


function find_duplicate_in_array(arra1) {
    const object = {};
    const result = [];

    arra1.forEach(item => {
      if(!object[item])
          object[item] = 0;
        object[item] += 1;
    })

    for (const prop in object) {
       if(object[prop] >= 2) {
           result.push(prop);
       }
    }

    return result;

}

arr =[0,1,2,3,4,5,6,7,7,8,9,10];
document.write(find_duplicate_in_array(arr))


// o/p ->
// 7