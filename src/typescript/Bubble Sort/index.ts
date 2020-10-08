import { Sorter } from "./Sorter";
import { NumbersCollection } from "./NumbersCollection";
import { CharCollection } from "./CharCollection";
import { LinkedList } from "./LinkedList";

// collection of numbers
const numbers = new NumbersCollection([2, 1, 10, 4, 3]);
numbers.sort();
console.log(numbers.data);

//collection of string
const word = new CharCollection("bubble");
word.sort();
console.log(word.data);

// linkedList
const linkedList = new LinkedList();
linkedList.add(75);
linkedList.add(65);
linkedList.add(-5);
linkedList.add(3);
linkedList.add(90);

linkedList.sort();
console.log(linkedList.print());
