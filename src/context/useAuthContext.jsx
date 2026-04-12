import { useContext } from "react"
import { authentication } from "./AuthContext"


export default function useAuthContext () {

    const {userData,setUserData} = useContext(authentication)

    return {userData,setUserData} 


}