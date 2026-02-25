import React from 'react';
import type { UserState } from '../types/boarTypes';

type BoardContextType = {
    state: UserState,
    dispatch: (action: any) => void
}

export  const boardContext = React.createContext<BoardContextType | null>(null)