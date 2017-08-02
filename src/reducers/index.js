// Set up your root reducer here...
 import { combineReducers } from 'redux';
 
 import labtests from './labtestReducer';
 
 import diagnosticcenters from './diagnosticcenterReducer';

 import homeremedies from './homeremediesReducer';

 const rootReducer=combineReducers({
     labtests,
    diagnosticcenters,
    homeremedies
 });

 export default rootReducer;