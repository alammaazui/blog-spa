import { createContext, useState } from "react"


export const authentication = createContext()

export default function AuthContext ({children}) {

    const [userData,setUserData] = useState({})

    return(
        <>
            <authentication.Provider value = {{userData,setUserData}}>
                {children}
            </authentication.Provider>
        </>
    )

}