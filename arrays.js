var chocolateBars=['snickers', 'hundredgrand', 'kitkat', 'skittles'];

function addElementToBeginningOfArray(array, element){
  var array=[1]
  return ['foo',...array]
}

function destructivelyAddElementToBeginningOfArray(array, element){
  array.unshift("foo")
  return array
}

function addElementToEndOfArray(array, element){
  return [...1, 'foo']
}

function destructivelyAddElementToEndOfArray(array, element){
  array.push(element)
  return array
}

function accessElementInArray(array, index){
  var array=[1,2,3]
  return array[2]
}

function destructivelyRemoveElementFromBeginningOfArray(array){
  array.shift()
  return array
}

function removeElementFromEndOfArray(){}
