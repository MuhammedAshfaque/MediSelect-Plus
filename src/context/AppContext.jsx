import { createContext } from "react";
import { doctors } from "../assets/assets";
export const AppContext = createContext()

// We creat this context file. So that we can access the common logic from this file..

const AppContextProvider = (props) => {
    const currencySymbol = '$'
    const value = {
        doctors,
        currencySymbol
    }
    return (
        <AppContext.Provider value={value}>
            {props.children}
        </AppContext.Provider>
    )
}
export default AppContextProvider
