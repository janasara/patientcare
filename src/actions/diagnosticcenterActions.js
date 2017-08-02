import ActionTypes from '../constants/actionTypes';

import axios from 'axios';

export function loadDiagnosticCenterSuccess(diagnosticcenters) {
  return { type: ActionTypes.LOAD_DIAGNOSTICCENTER_SUCCESS, diagnosticcenters };

}


export function loadDiagnosticCenters() {
  //debugger;
  return function (dispatch) {
    
    return axiosCall().then(diagnosticcenters => {
      dispatch(loadDiagnosticCenterSuccess(diagnosticcenters));
    }).catch(error => {
      throw (error);
    });
  };
}

export function axiosCall(){ 
   return axios.get( ActionTypes.API_CALL+"diagnosticcenters").then(response => response.data);
}






