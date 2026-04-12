import { createContext, useState } from "react"

export const paymentcontext =createContext()

export default function PaymentContext ({children}) {

    const [payment ,setPayment] = useState({}) ;
    return(
        <>
            <paymentcontext.Provider value={{payment ,setPayment}}>
                {children}
            </paymentcontext.Provider>
        </>
    )
}