import {  useContext } from "react"
import { boardContext } from "../context/boardContext"

export const useBoard = () => {
    const context = useContext(boardContext)
       if (!context) {
            throw new Error("useBoard debe usarse dentro de BoardProvider");
        }

    return context
  
}

