/**
 * Part 2
 *
 * In this file, we're going to create some
 * Functions to work with our data created in
 * data.js.
 *
 * See the README for detailed instructions,
 * and read every instruction carefully.
 */

//////////////////////////////////////////////////////////////////////
// Step 1 - Search ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
function search (animals,name){
    //takes an array animals
    
    //takes a string name
    //looks through animals 
    
    //bollean variable describing we found an animal
    let found = 0;
    for (let i = 0; i < animals.length; i++){
    
    //returns animals object, if an animal with that name exists in the array
        if (animals[i].name === name){
        found ++;
        // return object
        return animals[i];
        }
        
    }
    if(found === 0){
        return null;
        
    }
        
    //if no animal with that name, return null
}


//////////////////////////////////////////////////////////////////////
// Step 2 - Replace //////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//i 3 para, array animals, name of an animal, and object for replacement animal
//o nothing
// constraint replace object
//otherwise nothing

function replace(animals, name, replacement){
    //looping over animals array
    for (var i = 0; i <animals.length; i++){
        //if this location has same name
        if (animals[i].name ===name){
            //replace at this index with replacement
            animals[i] = replacement;
            
        }
    }
}



//////////////////////////////////////////////////////////////////////
// Step 3 - Remove ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

//function remove
function remove (animals, name){
    
    for (var i = 0; i <animals.length; i++){
        //if this location has same name
        if (animals[i].name ===name){
            //use method to remove at this location
            animals.splice(i, 1);
            
        }
    }
    
}



//////////////////////////////////////////////////////////////////////
// Step 4 - Create ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

//function add
function add(animals,animal){
    //variable named passing
    var passing = true;
    //animal name length greater than 0
    if(animal.name.length ===  0 ){
        passing = false;
    } else if (animal.species.length === 0){
        passing =false;
    }  
    for (var i = 0; i<animals.length; i++){
        if (animals[i].name===animal.name){
        passing =false;        
        }
    }
    if (passing ===true){
        animals.push(animal);
    }
    
    //animal species length greater than 0
    //unique name/doesn't match other animal names
    
    
}




/**
 * You did it! You're all done with Matchy!
 */



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var search, replace, remove, add;
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    module.exports.search = search || null;
    module.exports.replace = replace || null;
    module.exports.remove = remove || null;
    module.exports.add = add || null;
}