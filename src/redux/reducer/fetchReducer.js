import { FETCH_DATA,FETCH_SUCCESS,FETCH_FAILURE } from "../actions/actionTypes";

let initialState={
    loading:false,
    data:[],
    error:null

}

function fetchReducer(state=initialState,action){
 

    switch (action.type) {
        case FETCH_DATA:
         return {...state,loading:true}

         case FETCH_SUCCESS:
         return {...state,loading:false,data:action.payload,error:null}
    
         case FETCH_FAILURE:
            return {...state,loading:false,data:[],error:action.payload}

        default:
            return state
    }


}

export default fetchReducer