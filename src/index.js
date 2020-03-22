module.exports = function check(str, bracketsConfig) {
  str=str.split("");
  let open=[];
  let close=[];
  let sam=[];
  
  for (let i=0; i<bracketsConfig.length; i++) {
    if (bracketsConfig[i][0]==bracketsConfig[i][1]) {
      sam.push(bracketsConfig[i][0]);
    } else {
      open.push(bracketsConfig[i][0]);
      close.push(bracketsConfig[i][1]);
    }
  }

  let stack=[];
  for (i=0; i<str.length; i++) {
    if (open.includes(str[i])) {
      stack.push(str[i]);
    } else if (close.includes(str[i])) {
      if (open.indexOf(stack[stack.length-1])==close.indexOf(str[i])) {
        stack.pop();
      } else return false;
    } else if (stack[stack.length-1]==str[i]) {
      stack.pop();
    } else {
      stack.push(str[i]);
    }
  }
    if (stack.length==0) {
      return true;
    } else {
      return false;
    }
  }