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

function checker(s: string): boolean {
  const charMap = new Map<string, string>();
  charMap.set(")", "(");
  charMap.set("}", "{");
  charMap.set("]", "[");

  const stack: string[] = [];

  for (const char of s) {
    if (charMap.has(char)) {
      const oposite = charMap.get(char);
      if (stack.pop() !== oposite) return false;
      continue;
    }
    stack.push(char);
  }
  return stack.length === 0;
}

const obj = { 1: "ali", 2: "mobin" };

const arr = [2, 4, 66, 1];
Array.prototype.CustomMap = CustomMap;
function CustomMap(fn) {
  const res: any[] = [];
  for (const item of this) {
    res.push(fn(item));
  }
  return res;
}
console.log(arr.CustomMap((number) => number > 3));

function deepEqual(objOne: ObjType, objTwo: ObjType): boolean {
  return JSON.stringify(objOne) === JSON.stringify(objTwo);
  //   if (objOne === objTwo) return true;
  //   if (typeof objOne !== "object" || typeof objTwo !== "object") return false;
  //   const oneKeys = Object.keys(objOne);
  //   const twoKeys = Object.keys(objTwo);
  //   if (oneKeys.length !== twoKeys.length) return false;
  //   for (const key of oneKeys) {
  //     if (!twoKeys.includes(key)) {
  //       return false;
  //     }
  //   }
  //   for (let i = 0; i < oneKeys.length; i++) {
  //     if (objOne[oneKeys[i]] instanceof Object) {
  //       if (!deepEqual(objOne[oneKeys[i]], objTwo[oneKeys[i]])) {
  //         return false;
  //       }
  //       continue;
  //     }
  //     if (objOne[oneKeys[i]] !== objTwo[oneKeys[i]]) {
  //       return false;
  //     }
  //   }

  //   return true;
}
console.log(
  deepEqual(
    { x: 10, y: { z: 30 }, name: { fullName: "mobin" } },
    { x: 10, y: { z: 30 }, name: { fullName: "mobin" } }
  )
);

type ObjType = {
  x: number;
  y: { z: number };
  name: { fullName: string };
};
