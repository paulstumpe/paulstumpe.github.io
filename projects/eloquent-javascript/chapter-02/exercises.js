
////////////////////////////////////////////////////////////////////////////////
// triangles ///////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

//num param for amount of times
function triangles(num) {
  //holder hashtag
  let holder = "#";
  //repeat num aboumt of times
  for (let i =0; i<num;i++){
    //console log current size
    console.log(holder);
    //add one to size 
    holder+= "#";
  }
}
////////////////////////////////////////////////////////////////////////////////
// fizzBuzz ////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function fizzBuzz(start,end) {
  //count 1 to 100
  let i =start;
  for(i;i<=end;i++){
    //if current number is a multiple of 3
    //and 5
    if(i%5===0&&i%3===0){
      console.log("fizzbuzz");
    //if current number is a multiple of 5
    } else if (i%5===0){
      console.log("buzz");
    //if current number is a multiple of 3
    } else if (i%3===0){
      console.log("fizz");
    
    //else print i
    } else{
      console.log(i);
    }
  }
}

////////////////////////////////////////////////////////////////////////////////
// drawChessboard //////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function drawChessboard(size) {
  //in size
  //out consolelog strings
  //add spaces and hashtags and new line characts based on size.
  //need to alternate characters
  let chessboard = "";
  //print based on size
  //loop size times making prebuilt lines
  //loop size times combining prebuilt lines
  let oddline = "";
  let evenline = "";
  for (let i=0;i<size; i++){
    if (i%2===1){
      oddline += " ";
      evenline += "#";
    } else {
      oddline += "#";
      evenline += " ";
    }
  }
  for(let i=0; i<size; i++){
    if (i%2===0){
      chessboard += evenline + "\n";
    } else {
      chessboard += oddline + "\n";
    }
  }
  console.log(chessboard);
  
  

  
}

////////////////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    triangles,
    fizzBuzz,
    drawChessboard,
  };
}
