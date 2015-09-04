
function isCircularMatch(source, find) {
  var temp = source + source;
  return temp.search(find) !== -1;
}

console.log('dog in hotdog is: ' + isCircularMatch('hotdog', 'dog'));

console.log('sass in assignments is: ' + isCircularMatch('assignments', 'sass'));

console.log('sassy in assignments is: ' + isCircularMatch('assignments', 'sassy'));
