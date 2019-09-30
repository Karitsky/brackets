module.exports = function check(str, bracketsConfig) {

  let rules = new Map(bracketsConfig);
  let tempStack = [];
  let lastOne = '';

  for (let i = 0; i < str.length; i++) {

    if (str.charAt(i) == tempStack[tempStack.length - 1] 
        && (str.charAt(i) === '|' 
        || str.charAt(i) === '7' 
        || str.charAt(i) === '8')) {
      tempStack.pop();

    } else if (rules.has(str.charAt(i))) {
    tempStack.push(str.charAt(i));

    } else {
      lastOne = tempStack.pop();
      if (str.charAt(i) !== rules.get(lastOne)) {
        return false;
      }
    }
  }

  if (tempStack.length > 0) {
    return false;
  }

  return true;

}
