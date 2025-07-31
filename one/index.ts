// /*
//     1.Assumptions :
//     1- check string for containing chars

//     2.Requirements:
//     example:
//     // () > Boolean
// // ()()[] true
// // ([)] false

//     Complexities:
//     time ===>O(n)
//     space ===>O(n)

//     3.corner case:

// */

// function checker(s: string): boolean {
//   const charMap = new Map<string, string>();
//   charMap.set(")", "(");
//   charMap.set("}", "{");
//   charMap.set("]", "[");

//   const stack: string[] = [];

//   const obj = { 1: "ali", 2: "mobin" };

//   for (const char of s) {
//     if (charMap.has(char)) {
//       const oposite = charMap.get(char);
//       if (stack.pop() !== oposite) return false;
//       continue;
//     }
//     stack.push(char);
//   }
//   return charMap.size === 0;
// }

// const obj = { 1: "ali", 2: "mobin" };

// const arr = [2, 4, 66, 1];
// [false, true, true, false];
// Array.prototype.CustomMap = CustomMap;
// function CustomMap(fn) {
//   const res = []
//   for (const item of this) {
//     console.log(fn(item));
//     fn(item);
//   }
//   return this;
// }
// console.log(arr.CustomMap((number) => number > 3));

function deepEqual(objOne, objTwo) {
  
}
console.log(deepEqual({ x: 1, y: { z: 3 } }, { x: 1, y: { z: 3 } }));
