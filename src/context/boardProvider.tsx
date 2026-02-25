import { useReducer, type ReactNode } from 'react'
import {boardContext} from './boardContext'
import ReducerBoard from '../reducers/reducerBoard'

const BoardProvider = ({children}:{children:ReactNode}) => {

const [state,dispatch] = useReducer(ReducerBoard,{
    indiceQuestion: 2,
    questions: null,
    level: 0,
    answers: "",
    user:"",
    games_status:null,
    timer:{
    start: false,
    time:1
  }  ,
  round:1,
  banner:false,
  winner:false
})  
  return (
    <boardContext.Provider value={{state,dispatch}}>
        {
            children
        }
      
    </boardContext.Provider>
  )
}

export default BoardProvider
