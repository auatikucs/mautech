import {
  LOAD_DATA, SET_LOADING
   
}from '../types'


const AppReducer= (state,action)=>{
    switch(action.type){
        
            case LOAD_DATA:
                        return {
                            ...state,
                            triger:action.payload
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