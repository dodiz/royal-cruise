import { useContext, useState, useEffect } from "react"
import { FirebaseContext } from "../context"
import { COLLECTIONS } from "../constants"

export default function useAuth() {
    const { firebase, db } = useContext(FirebaseContext)
    const [loading, setLoading] = useState(true)
    const [user, setUser] = useState(null)
    const [userData, setUserData] = useState({})

    useEffect(() => {
        const listener = firebase.auth().onAuthStateChanged(async authUser => {
            await setUser(() => authUser ? authUser : null)
            setLoading(false)
        }, err => { console.log("error") })

        return () => listener()
    }, [])

    useEffect(() => {
        if (user) {
            const userCollectionListener = db()
                .collection(COLLECTIONS.USERS)
                .doc(user.uid)
                .onSnapshot(async (res) => {
                    await setUserData(res.data())
                    setLoading(false)
                },
                    (err) => {
                        setUserData({ role: 0 })
                    })

            return () => userCollectionListener()
        }
    }, [user])

    return { user, userData, loading }
}
