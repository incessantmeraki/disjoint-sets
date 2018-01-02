var test = require('tape')
var Disjoint = require('./index.js')

var d

test('setup', function (t) {
  d = new Disjoint(10)
  t.end()
})

test('make three disjoint sets', function (t) {
  t.equal(1, d.union(0, 1))
  t.equal(3, d.union(2, 3))
  t.equal(5, d.union(4, 5))
  t.equal(3, d.union(1, 3))
  t.equal(5, d.union(5, 6))
  t.equal(5, d.union(5, 7))
  t.equal(5, d.union(5, 8))
  t.end()
})

test('perform union and compression', function (t) {
  t.equal(3, d.union(3, 5))
  t.equal(3, d.find(3))
  t.equal(3, d.find(5))
  t.equal(3, d.find(7))
  t.equal(3, d.find(0))
  t.equal(3, d.find(4))
  t.equal(3, d.find(6))
  t.equal(3, d.find(8))
  t.end()
})