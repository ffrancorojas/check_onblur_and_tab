import { createContext, useContext, useState } from "react";


const defaultValues = {
    iteration: 1,
    hasFocus: true,
}

const Context = createContext()

const MainContextProvider = (props) => {
    const [state, setState] = useState(defaultValues)
    return <Context.Provider value={{ state, setState }}>{props.children}</Context.Provider>
}

export { Context, MainContextProvider }