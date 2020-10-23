import { useContext } from "react"
import { FirebaseContext, UserContext } from "../context"

export default function useFirestore() {
    const { db } = useContext(FirebaseContext)
    const { user, userData } = useContext(UserContext)


    return {}
}