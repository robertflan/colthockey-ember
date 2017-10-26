import Ember from 'ember';

export default function() {
   //reopen() method for instances
   var Person = Ember.Object.extend ({
      firstName: null,
      lastName:  null,
   });

   //adding new variable to the Person class
   Person.reopen ({
      middleName: 'Smith',
   });

   document.write('Middle Name: '+Person.create().get('middleName'));
   document.write("<br>");

   //reopenClass() method for classes
   Person.reopenClass ({
      //creating new function for class Person
      openClass: function() {
         return Person.create({isMan: true});
      }
   });

   document.write('isMan: '+Person.openClass().get('isMan'));
}