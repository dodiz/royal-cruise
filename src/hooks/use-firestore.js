import { useContext } from "react"
import { FirebaseContext, UserContext } from "../context"
import { COLLECTIONS } from "../constants"

export default function useFirestore() {
    const { db } = useContext(FirebaseContext)
    const { user, userData } = useContext(UserContext)

    const addPg = data => new Promise((resolve, reject) => {
        db()
            .collection(COLLECTIONS.TOAPPROVE)
            .doc(user.uid)
            .set({ ...data, date: new Date(Date.now()) })
            .then((res) => { resolve() })
            .catch(e => { reject() })
    })
    const getCollection = (collection) => new Promise((resolve, reject) => {
        db()
            .collection(collection)
            .get()
            .then(snap => {
                resolve(snap)
            })
    })
    const deleteDoc = (collection, doc) => new Promise((resolve, reject) => {
        db()
            .collection(collection)
            .doc(doc)
            .delete()
            .then(() => resolve())
    })
    const addDoc = (collection, data) => new Promise((resolve, reject) => {
        db()
            .collection(collection)
            .add(data)
            .then(() => resolve())
            .catch(() => reject())
    })
    const addDocName = (collection, name, data) => new Promise((resolve, reject) => {
        db()
            .collection(collection)
            .doc(name)
            .set(data)
            .then(() => resolve())
            .catch(() => reject())
    })
    const getDoc = (collection, name) => new Promise((resolve, reject) => {
        db()
            .collection(collection)
            .doc(name)
            .get()
            .then((res) => resolve(res))
            .catch((e) => reject(e))
    })

    return { addPg, getCollection, deleteDoc, addDoc, getDoc, addDocName }
}