
var nestedObject = {
   
    // data: {
    //     info: {
    //         stuff: {
                // thing: {
                    moreStuff: {
                        magicNumber: 44,
                        something: 'foo2'
                    }
    //             }
    //         }
    //     }
    // }
}
let test =44
// console.log(Object.values(test))
   

// let hasIt = findValue(nestedObject, 44); // true
// let doesntHaveIt = findValue(nestedObject, "foo"); // false
// console.log(Object.values(moreStuff).includes(44))
function findValue(object,value){
    //console.log(Object.values(object).length == 0)
    // if(Object.values(object).length == 0){
    //     console.log('wah')
    //     return false;
    // }else
    const objItems = Object.values(object);
     if(objItems.includes(value)){console.log(objItems.includes(value)); return true} ;
 
        objItems.forEach(subObject => {
            if(typeof  subObject === 'object'){
         return  findValue(subObject,value);}
        });
    
    return false

}
console.log(findValue(nestedObject,44)) 
// console.log({hasIt,doesntHaveIt})

// array3 = array1.concat(array2)




// let sum = 1;
// function productOfArray(arr){
//     if(!arr.length) return sum;

      
//     sum = sum * arr.shift();
//      productOfArray(arr);
 
// }
// console.log(productOfArray([2,3]));

// function test(arr, fn) {
//     if (!arr.length) {
//         return true
//     } else if (!fn(arr[0])) {
//         console.log(arr)
//         return false
//     } else {
//         arr.shift()
//         return test(arr, fn)
//     }
// }

// function isTrue(n) {
//     return n < 10
// }
// console.log(test([20, 25], (n) => {
//     return n > 10
// }));