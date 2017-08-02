import ActionTypes from '../constants/actionTypes';

import axios from 'axios';

export function loadHomeremediesSuccess(homeremedies) {
  return { type: ActionTypes.LOAD_HOMEREMEDIES_SUCCESS, homeremedies };

}


export function loadHomeremedies() {
 // debugger;
  return function (dispatch) {
    
    return axiosCall().then(homeremedies => {
      dispatch(loadHomeremediesSuccess(homeremedies));
    }).catch(error => {
      throw (error);
    });
  };
}

export function axiosCall(){ 
   return axios.get( ActionTypes.API_CALL+"homeremedies").then(response => response.data);
}
