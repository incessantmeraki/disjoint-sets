function Disjoint(nelements) {
  this._links = []
  this._ranks = []

  for (let i = 0; i < nelements; i++) {
    this._links[i] = -1
    this._ranks[i] = 1
  }
}

Disjoint.prototype.union = function (s1, s2) {
  var p, c

  if (this._links[s1] !== -1 || this._links[s2] !== -1) {
    return "Error: union must be called on a set"
  }

  if (this._ranks[s1] > this._ranks[s2]) {
    p = s1
    c = s2
  } else {
    p = s2
    c = s1
  }
  this._links[c] = p
  if (this._ranks[s1] == this._ranks[s2]) this._ranks[p]++
  return p
}

Disjoint.prototype.find = function (element) {
  var p, c
  c = -1

  while (this._links[element] !== 1) {
    p = this._links[element]
    this._links[element] = c
    c = element
    element = p
  }

  p = element
  element = c
  while (element !== -1) {
    c = this._links[element]
    this._links[element] = p
    element = c
  }
  return p
}
