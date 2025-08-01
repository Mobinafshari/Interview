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
function CustomMap(fn): any[] {
  const res: any[] = [];
  for (const item of this) {
    res.push(fn(item));
  }
  return res;
}

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

type ObjType = {
  x: number;
  y: { z: { number: number } };
  name: { fullName: string };
};

// How To Making an Object Iterable Without Converting it to an array ===>>>
// TODO: read more about this
let person: PersonType = {
  name: "hashem",
  age: 78,
  city: "tehran",
  [Symbol.iterator]() {
    const keys = Object.keys(this);
    let i = 0;
    return {
      next: () => {
        if (i < keys.length) {
          const key = keys[i++];
          return { value: this[key], done: false };
        } else {
          return { done: true, value: undefined };
        }
      },
    };
  },
};

for (const val of person) {
  // console.log(val);
}

type PersonType = {
  name: string;
  age: number;
  city: string;
  [Symbol.iterator](): { next: () => { value: any; done: boolean } };
};

const array = [10, 20][Symbol.iterator]();

const symOne = Symbol();
const symTwo = Symbol();
const arrOne = [1, 5, 20];
const arrTwo = [1, 5, 20];

const age = Symbol("age");
let objTest = {
  name: "mobin",
  [age]: 25,
  age: 25,
  [Symbol.iterator]() {
    const keys = Object.keys(objTest);
    let i = 0;
    return {
      next: () => {
        if (i < keys.length) {
          const key = keys[i++];
          return { value: key, done: false };
        } else {
          return { value: undefined, done: true };
        }
      },
    };
  },
};

const asyncIterable = {
  [Symbol.asyncIterator]() {
    let i = 0;
    return {
      async next() {
        if (i < 3) {
          await new Promise((res) => setTimeout(res, 500));
          return { value: i++, done: false };
        }
        return { done: true };
      },
    };
  },
};

(async () => {
  for await (const num of asyncIterable) {
    console.log(num);
  }
})();
