
import Home from "./pages/home"
import LevelTree from "./pages/levelTree"
import LevelTwo from "./pages/levelTwo"
import { useBoard } from "./hooks/useBoard"
import LevelOne from "./pages/levelOne"
import Final from "./pages/Final"
import Music from "./components/music"



function App() {


  const{state,dispatch} = useBoard()

  const Levels = [
     <Home/>,
     <LevelOne/>,
     <LevelTwo/>,
     <LevelTree/>,
     <Final/>
  ]

  
  return (
    <>
    { Levels[state.level] }
  
   {
    <Music/>
   }
   
    <div className="paginacion">
         <button onClick={() => dispatch({type:"ANT_LEVEL"})}>anterior</button>
       <button  onClick={() => dispatch({type:"NEXT_LEVEL"})} >siguiente</button>
      </div> 
    
    </>
  )
}

export default App
