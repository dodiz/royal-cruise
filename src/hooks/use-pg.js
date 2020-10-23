import { useState, useEffect, useContext } from "react"
import { useLocation } from "react-router-dom"

import { COLLECTIONS, ROUTES } from "../constants"
import { FirebaseContext, UserContext } from "../context"

export default function usePg() {
    const location = useLocation()
    const { db, rdb } = useContext(FirebaseContext)
    const { user } = useContext(UserContext)
    const [userPgs, setUserPgs] = useState(null)
    const [currentPg, setCurrentPg] = useState(null)

    //ONLINE
    const [onlinePgs, setOnlinePgs] = useState([])

    useEffect(() => {
        db()
            .collection(COLLECTIONS.PGS)
            .where("user", "==", user.uid)
            .onSnapshot(async res => {
                await setUserPgs([])
                res.docs.forEach((el, i) => setUserPgs(prev => [...prev, el.data()]))

                res.docs.length &&
                    await setCurrentPg(0)
            })
        rdb()
            .ref(COLLECTIONS.ONLINE)
            .on("value", async snap => {
                await setOnlinePgs(() => {
                    const arr = []
                    snap.forEach((el, i) => {
                        arr.push(el.val())
                    })
                    return arr
                })
            })
        rdb()
            .ref(COLLECTIONS.ONLINE)
            .child(user.uid)
            .onDisconnect()
            .set(null)
    }, [])

    //ONLINE USERS WHEN PG CHANGES
    useEffect(() => {
        currentPg !== null &&
            rdb()
                .ref(COLLECTIONS.ONLINE)
                .child(user.uid)
                .update({
                    pg: userPgs[currentPg].personal.name,
                    userName: user.displayName
                })
    }, [currentPg])

    return [userPgs, currentPg, setCurrentPg, onlinePgs]
}