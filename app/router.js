import Ember from 'ember';                   
//Access to Ember.js library as variable Ember
import config from './config/environment';
//It provides access to app's configuration data as variable config 

//The const declares read only variable
const Router = Ember.Router.extend ({
   location: config.locationType,
   rootURL: config.rootURL
});

Router.map(function() {
   this.route('specifyroute');
});

//It specifies Router variable available to other parts of the app

export default Router;   
