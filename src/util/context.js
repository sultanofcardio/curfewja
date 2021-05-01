import {createContext, useReducer} from "react";
import {CurfewData} from "../model/Curfew";

const actions = {
  setCurfewData: 'SET_CURFEW_DATA'
}

const reducer = (state, action) => {
  switch (action.type) {
    case actions.setCurfewData:
      return {...state, curfewData: action.payload}
    default:
      return state
  }
}

const initialState = {
  curfewData: new CurfewData(new Date())
}

export const Context = createContext(initialState)

export const ContextProvider = ({children}) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const setCurfewData = (payload) => dispatch({type: actions.setCurfewData, payload})

  return (
    <Context.Provider value={{
      state,
      dispatch,
      setCurfewData
    }}>
      {children}
    </Context.Provider>
  )
}