// /////////////////////////////////////////////////////////////////////////////
// flatten /////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

function flatten(arr) {
//takes an array, of arrays.
//outputs an array with no values of array
// function to give reduce
function myFunction (total, currentValue, currentIndex, arr){
  return total.concat(currentValue);
  
}
let newArray = arr.reduce(myFunction);
return newArray;


}

// /////////////////////////////////////////////////////////////////////////////
// loop ////////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

function loop(value, testFunc, updFunc, bodFunc) {
  // input a value, a test function, an update function, and a body function
  //new value
  
  for (let i = value; testFunc(i); i = updFunc(i)){
    //code block should
    //use test func, stop if it returns false
    bodFunc(i);
    }

}

// /////////////////////////////////////////////////////////////////////////////
// every ///////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

function every(array, test) {
  //loop through
  //hold falsey if anything ever fails
  let hold = true;
  for (let i = 0; i<array.length; i++){
    if (false===test(array[i])){
      hold = false;
    }
  }
return hold;
}

// /////////////////////////////////////////////////////////////////////////////
// dominantDirection ///////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

function dominantDirection(str) {
  // i = string of text
  // each script object has a direction property
  //output return direction used by majority of the characters that have a script
  //property
  
  
  //function characterScript
  // key direction string of ltr, rtl, or ttb
  function characterScript(code) {
  for (let script of SCRIPTS) {
    if (script.ranges.some(([from, to]) => {
      return code >= from && code < to;
    })) {
      return script;
    }
  }
  return null;
  }
  //function countby
  function countBy(items, groupName) {
    let counts = [];
    for (let item of items) {
      let name = groupName(item);
      let known = counts.findIndex(c => c.name == name);
      if (known == -1) {
        counts.push({name, count: 1});
      } else {
        counts[known].count++;
      }
    }
    return counts;
  }
                // THE TRUE FUNCTION
    let scripts = countBy(str, char => {
      let script = characterScript(char.codePointAt(0));
      return script ? script.direction : "none";
    }).filter(({name}) => name != "none");
    switch (scripts.length) {
      case 0:
        return 'no dominant direction found';
      case 1:
        return scripts[0].name;
      default:
        if(scripts.reduce((acc, cur) => acc.count ===cur.count)){
          return 'no dominant direction found';
        } else{
          return scripts.reduce((acc,cur) => acc.count >= cur.count ? acc.name : cur.name);
        }
    }
  
}
// /////////////////////////////////////////////////////////////////////////////
//  //////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    flatten,
    loop,
    every,
    dominantDirection,
  };
};
