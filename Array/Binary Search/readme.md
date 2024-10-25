## Binary Search

- Its higher version of Linear search

```sh
condition :- array should be aecending or decending order
```

```sh

const arr = [2, 4, 7, 11, 13, 17]
const key = 13


mid = (start index + end index) / 2

mid = 0 + 5/ 2 = 5/2 = 2.5 = 2
mid = 7



mid == key
7 == 13
NO....

key > mid

key < mid

```

```sh
**IMPORTANT**

if array start index and end index is out of bound
then it is difficult to find mid value

let use this to find mid value


---------------------------------
mid = start + (end - start)/2;
---------------------------------

```

```sh
Linear search time complexity --> O(n)
Binary search time complexity --> O(log n)
```
