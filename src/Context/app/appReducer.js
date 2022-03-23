import {
  LOAD_DATA, LOAD_DEPARTMENT, SET_LOADING
   
}from '../types'


const AppReducer= (state,action)=>{
    switch(action.type){
        
            case LOAD_DATA:
                        return {
                            ...state,
                            triger:action.payload
                        }
         case LOAD_DEPARTMENT:
                            return {
                                ...state,
                                department:action.payload
                            }
            case SET_LOADING:
                   const prev=state.loading
                        return {
                            ...state,
                            loading:!prev
                        }

            
        default:
        return state;
    }
    
    }
    export default AppReducer;