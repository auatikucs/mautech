import {
  LOAD_DATA
   
}from '../types'


const AppReducer= (state,action)=>{
    switch(action.type){
        
            case LOAD_DATA:
                        return {
                            ...state,
                            triger:action.payload
                        }

            
        default:
        return state;
    }
    
    }
    export default AppReducer;