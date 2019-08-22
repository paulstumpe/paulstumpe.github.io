// #!/usr/bin/env node

'use strict';

/**
 * 4: Contact List
 * 
 *  a. Create a factory Function called makeContact(id, nameFirst, nameLast) 
 *     that returns a contact object.
 *     
 *          ex: makeContact(1, 'Max', 'Gaudin'); // => {id: 1, nameFirst: 'Max', nameLast: 'Gaudin'}
 *     
 *  b. Create a factory Function called makeContactList that returns an Object 
 *     that manages contacts. The contact-list object should have the following API:
 *       
 *      1. length(): returns the number of contacts within the list.
 *      2. addContact(contact): takes a contact object to be added to the 
 *         contact-list.
 *      3. findContact(fullName): takes a full-name String, like 'Max Gaudin', and 
 *         returns the contact object if found in the contacts-list, or, 
 *         undefined if the fullName does not match any contacts in the list.
 *      4. removeContact(contact): takes a contact object to be removed from 
 *         the contact-list.
 * 
 * BONUS : add a printAllContactNames() Function to your makeContactList() factory, so that the 
 *         contact-list returned has an all() API. The printAllContactNames() Function should 
 *         return a String formated with all the full-names of the separated 
 *         with a line-break, like so:
 *          
 *         myContacts.printAllContactNames(); // => Max Gaudin
 *                                                  John Fraboni
 *                                                  Your Mom
 *          
 *          WARNING: To pass the bonus test, the LAST full name should have NO
 *          new-line character added after it!
 */

// YOUR CODE GOES BELOW HERE //
//factory function
//i
//contact, fullname, contact again
//o should return an object that manages contacts. this means it should contain functions for length, addContact,findContact, removeContact
//constrainsts
//edgecase

//declare function named makeContactList

    //declare array that holds each contact
    //write a return statement, the value it returns is an object
    
        //inside this object, write function named length
        //this function returns the number of contacts on the list
            //
        
        //inside this object write function named addconcact
        //inside this object write function findcontact
        //inside this object write function removecontact


//input
// Function named factory that takes paramaters id, nameFirst, NameLast

//output a contact object with keys of id nameFirst NameLast
//returns an object with 

function makeContact(id, nameFirst, nameLast) {
//object named factory

    return   {
        //key value pair for id. id is num type
        "id": id,
        //key value pair for nameFirst
        "nameFirst": nameFirst,
        "nameLast": nameLast
    };

//return an object


} 


function makeContactList() {
    /*
     * You need something here to hold contacts. See length api for a hint:
     */
    // set contacts to an array
    var contacts = [];
    
    
    return {
        // we implemented the length api for you //
        length: function() {
            return contacts.length;
        },
        // i: contact (object)
        // o: 
        // c: 
        // e:
        addContact: function(contact) {
            // referring to contacts array, use push() with an argument of contact 
            contacts.push(contact);
        },
        // i: fullName (string)
        // o: contact object
        // c: 
        // e: if contact is not found, return undefined
        findContact: function(fullName) {
            // use for loop to iterate through contacts array
            // set index to 0 while index is less than the length of the contacts array, increment by 1
            for (var i = 0; i < contacts.length; i++) {
                // if fullName is the same as the concatenation of the contact object's 
                // nameFirst and nameLast, then return the contact object
                var namesAdded = contacts[i][]
                // console.log(namesAdded);
                if (fullName === )
                // else returned undefined
            }
        }
    }
}




// YOUR CODE GOES ABOVE HERE //




// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
(typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.makeContact = makeContact;
    module.exports.makeContactList = makeContactList;
}
