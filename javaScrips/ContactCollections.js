"use strict";

let contacts = [
   {
       name: "John McCoy",
       phone: "615-419-6810",
       address: "303 New York New York, TN"
   },
   {
       name: "Sarah McCoy",
       phone: "615-341-4130",
       address: "303 New York New York, TN"
   },
   {
       name: "Mark McCoy",
       phone: "615-371-4130",
       address: "303 New York New York, TN"
   }
];
localStorage.setItem("contacts",
JSON.stringify(contacts));

function getContacts(){
    return JSON.parse(localStorage.getItem("contacts"));
}

module.exports = getContacts;