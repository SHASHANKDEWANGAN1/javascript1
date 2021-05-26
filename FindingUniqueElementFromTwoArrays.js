
const checkArrays = function(arr1, arr2)
{

    if (arr1.length !== arr2.length)
    {
        return false;
    } 
     return arr1.every((val) => arr2.includes(val));

};
console.log(checkArrays([1,2,3],[100, 2, 1, 10]));