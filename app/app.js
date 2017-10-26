import Ember from 'ember';

export default function() {
   var Car = Ember.Object.extend ({
      
      //The values for below variables will be supplied by 'create' method
      CarName: null,
      CarModel: null,
      carDetails: Ember.computed('CarName', 'CarModel', function() {

         //returns values to the computed property function 'carDetails'
         return ' Car Name: ' + this.get('CarName') + '<br>' + 
            ' Car Model: ' + this.get('CarModel');
      })
   });

   var mycar = Car.create ({
      //initializing the values of Car variables
      CarName: "Alto",
      CarModel: "800",
   });
   
   //Displaying the information of the car
   document.write("<h2>Details of the car: <br></h2>");
   document.write(mycar.get('carDetails'));
}
