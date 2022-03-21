import React,{Children, useReducer,useEffect} from 'react'
import AppContext from './appContext'
import appReducer from './appReducer'
import {
LOAD_DATA, SET_LOADING,
} from '../types'


export default function AppState(props){
    const initState={
        triger:[],
        loading:false
    }
const [state,dispatch]=useReducer(appReducer,initState)

const loadData=(id)=>{
    setIsLoading()
    fetch(`https://new-modibbo-adama.herokuapp.com/admin/get-single-faculty?facultyId=${id}`)
    .then(res => {
        res.json()
            .then(data => {
                setLoading([data.message])
                setIsLoading()
               
            })
    }).catch(err=>{
        
    })
}
const setIsLoading=()=>dispatch({type:SET_LOADING})
const setLoading=(triger)=>dispatch({type:LOAD_DATA,payload:triger})
// const setIslogged=()=>dispatch({type:SET_ISLOGED})
// const setStaff=(staff)=>dispatch({type:SET_STAFF,payload:staff})
// const setChatter=(chatter)=>dispatch({type:SET_CHAT,payload:chatter})
// const setCurrentAlert=(curAlert)=>dispatch({type:SET_CURRENT_ALERT,payload:curAlert})
// const setNewAlert=()=>dispatch({type:SET_NEWALERT})
// const setNewMessage=()=>dispatch({type:SET_NEWMESSAGE})

return <AppContext.Provider
value={{
    triger:state.triger,
    loadData,
    loading:state.loading
}}
>

    {props.children}
</AppContext.Provider>

}
