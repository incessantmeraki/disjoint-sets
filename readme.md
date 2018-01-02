# disjoint-sets

disjoint set data structure

[![Build Status](https://travis-ci.org/incessantmeraki/disjoint-sets.svg?branch=master)](https://travis-ci.org/incessantmeraki/disjoint-sets)

## Usage

### Example

```js
  var Disjoint = require('disjoint-sets')
  
  //create instance of disjoint sets with 10 elements(0 to 9)
  var d = new Disjoint(10)

  d.union(0,1) //combines elements 0 and 1 into same set
  d.union(1,2) //add 2 to same set

  d.size() //8 (number of sets)
  d.esize() //10 (number of elements)

  d.find(2) //rank(set number) of 2

```

### API

#### `d= new Disjoint(n)`
create new instance of disjoint sets with n elements numbered (0 to n-1) 

#### `d.union(s1,s2)`
creates a union of set s1 and set s2 and returns the root(rank) of the new set

#### `d.find(e)`
finds the rank (set number) of element numbered e

#### `d.size()`
returns the number of sets present

#### `d.esize()`
returns the total number of elements present

## License

MIT
