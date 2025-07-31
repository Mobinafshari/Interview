/*
    1.Assumptions :
    1- return Nth element of a single linked list

    2.Requirements :
    list=0 > 0 > 0 > 0 > 0 > 0 > 0 > null
    k=2

    3.Complexities:
    time ===> 
    space ===>
*/

let list = {
  head: {
    value: 1,
    next: {
      value: 34,
      next: {
        value: 44,
        next: {
          value: 56,
          next: {
            value: 87,
            next: null,
          },
        },
      },
    },
  },
};

function find(list, k) {
  let current = list.head;
  let slow = list.head;
  let count = k;
  while (count > 0) {
    current = current.next;
    count--;
  }

  while (current !== null) {
    current = current.next;
    slow = slow.next;
  }
  return slow;
}

console.log(find(list, 3));
