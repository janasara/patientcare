import ActionTypes from '../constants/actionTypes';

export default function diagnosticcenterReducer(state = [], action) {
    //debugger;
    switch (action.type) {
        case ActionTypes.LOAD_DIAGNOSTICCENTER_SUCCESS:
            return action.diagnosticcenters;

   
        // case ActionTypes.CREATE_LABTESTS_SUCCESS:
        //     return [
        //         ...state,
        //         Object.assign({}, action.labtest)
        //     ];

        // case ActionTypes.UPDATE_LABTESTS_SUCCESS:
        //     return [
        //          Object.assign({}, action.labtest),...state.filter(labtest => labtest.id !== action.labtest.id)
               
        //     ];
        // case ActionTypes.DELETE_LABTESTS_SUCCESS:

        //     return [
        //         ...state.filter(labtest => labtest.id !== action.labtestId)
        //     ];  
    


        default:
            return state;
    }

}