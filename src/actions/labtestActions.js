import ActionTypes from '../constants/actionTypes';


import axios from 'axios';

export function loadLabtestSuccess(labtests) {
  return { type: ActionTypes.LOAD_LABTESTS_SUCCESS, labtests };

}
// export function loadDiagnosticCenterSuccess(labtests) {
//   return { type: ActionTypes.LOAD_DIAGNOSTICCENTER_SUCCESS, diagnosticcenters };

// }
export function createLabtestSuccess(labtest) {
  return { type: ActionTypes.CREATE_LABTESTS_SUCCESS, labtest };
}

export function updateLabtestSuccess(labtest) {
  return { type: ActionTypes.UPDATE_LABTESTS_SUCCESS, labtest };
}

export function deleteLabtestSuccess(labtestId) {
  return { type: ActionTypes.DELETE_LABTESTS_SUCCESS, labtestId };
}

export function loadLabtests() { 
  //debugger;
  return function (dispatch) {
    return axiosCall().then(labtests => {
      dispatch(loadLabtestSuccess(labtests));
    }).catch(error => {
      throw (error);
    });
  };
}

export function axiosCall(){ 
   return axios.get( ActionTypes.API_CALL+"labtests").then(response => response.data);
}

// export function loadDiagnosticCenters() {
//   //debugger;
//   return function (dispatch) {
//     return axiosdCall().then(diagnosticcenters => {
//       dispatch(loadDiagnosticCenterSuccess(diagnosticcenters));
//     }).catch(error => {
//       throw (error);
//     });
//   };
// }

// export function axiosdCall(){ 
//    return axios.get( ActionTypes.API_CALL+"diagnosticcenters").then(response => response.data);
// }
export function saveLabtest(labtest) {
  //debugger;
 
  return function (dispatch) {
    if ((labtest.id).length>0 ){
        return axiosSaveLabtest(labtest).then(labtest => {
          dispatch(updateLabtestSuccess(labtest));            
        }).catch(error => {
          throw (error);
        });
      
    } else {
        return axiosSaveLabtest(labtest).then(labtest => {
          dispatch(createLabtestSuccess(labtest));            
        }).catch(error => {
          throw (error);
        });
    }  

  };
}

export function axiosSaveLabtest(labtest){ 

 if ((labtest.id).length>0 ){

   return axios.put(ActionTypes.API_CALL+"labtest/"+labtest.id, labtest).then(() => labtest);

 } else {
   labtest.id=getOrderId(labtest.dcenter?labtest.dcenter:"ord");
   return axios.post(ActionTypes.API_CALL+"labtest",labtest).then(() => labtest);
 }
}

function getOrderId(str) {
  const date = new Date();
  let components = [
    date.getYear(),
    date.getMonth(),
    date.getDate(),
    date.getHours(),
    date.getMinutes(),
    date.getSeconds(),
    date.getMilliseconds()
];

let id = str + components.join("");
return id;

}

export function deleteLabtest(labtestId) {
  return function (dispatch) {
    return  axiosDeleteLabtest(labtestId).then(labtestId => {
      dispatch(deleteLabtestSuccess(labtestId));
    }).catch(error => {
      throw (error);
    });
  };
}

export function axiosDeleteLabtest(labtestId){ 
   return axios.delete(ActionTypes.API_CALL+"labtest/"+labtestId).then(() => labtestId);
}

