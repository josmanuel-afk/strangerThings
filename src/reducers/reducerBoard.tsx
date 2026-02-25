import type { UserAction, UserState } from "../types/boarTypes"

const ReducerBoard = (state:UserState,UserAction:UserAction) => {
    switch (UserAction.type) {
        case "SET_QUESTIONS":
            return {...state,questions:UserAction.payload}
        case "SET_USER":
            return {...state,user:UserAction.payload}
        case "NEXT_LEVEL":
            if(state.level < 4) return {...state,level:state.level + 1}
            return state;
        case "ANT_LEVEL":
          if(state.level > 0)  return {...state,level:state.level -1}
          return state;
          case "RESET_LEVEL":
            return {...state,level:UserAction.payload,
                indiceQuestion: 0,
                questions: null,
                answers:null,
            }
        case "SET_ANSWERS":
            return {...state,answers:UserAction.payload}
        case "SET_INDICEQUESTION":
            return {...state,indiceQuestion:UserAction.payload}
        case "RESET_INDICEQUESTION":
            return {...state,indiceQuestion:0}
        case "RESET_ANSWERS":
            return {...state,answers:null}  
        case "SET_ROUND":
            return {...state,round:state.round +1}    
        case "RESET_ROUND":
            return {...state,round:1}  
        case "SET_GAMES_STATUS":
            return {...state,games_status:UserAction.payload}   
         case "SET_BANNER":
            return {...state,banner:UserAction.payload}   
        case "SET_WINNER":
            return {...state,winner:UserAction.payload}   
        case "PLAY":
            return {
                    indiceQuestion: 0,
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
                }
            
        case "SET_TIMER":
            return {...state,timer:{
                ...state.timer, 
               ...UserAction.payload
            }
                }   
        case "DECREMENT_TIMER":
            return {...state,timer:{
                ...state.timer, 
                time:state.timer.time -1
            }
                }   

              default:
                  return state;  
 
}
}


export default ReducerBoard
