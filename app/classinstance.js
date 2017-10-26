import Ember from 'ember';   //import ember module
export default function() {
   
   //new ember object
   const Demo = Ember.Object.extend ({
      init() {
         alert('The default property of stateOn is : ' + this.get('stateOn'));
      },
      stateOn: false
   });

   const state = Demo.create();   //new instance from object with create() method
   state.set('stateOn', true);
   console.log(state.get('stateOn'));
}