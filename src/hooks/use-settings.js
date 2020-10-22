import { useState, useEffect } from "react"

import { SETTINGS } from "../constants"

export default function useSettings() {

    const [settings, setSettings] = useState(SETTINGS.DEFAULT)

    useEffect(() => {
        const saved = JSON.parse(localStorage.getItem("settings"))
        setSettings(prev => ({
            ...prev,
            ...saved
        }))
    }, [])

    useEffect(() => {
        localStorage.setItem("settings", JSON.stringify(settings))
    }, [settings])

    return [settings, setSettings]
}