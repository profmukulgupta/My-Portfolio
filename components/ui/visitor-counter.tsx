"use client"

import { useEffect } from "react"

export default function VisitorCounter() {
  useEffect(() => {
    // Load the authentication script
    const authScript = document.createElement("script")
    authScript.type = "text/javascript"
    authScript.src = "https://www.freevisitorcounters.com/auth.php?id=753f2e2f16b723b08a67354f5a4c446051675783"
    document.head.appendChild(authScript)

    // Load the counter script
    const counterScript = document.createElement("script")
    counterScript.type = "text/javascript"
    counterScript.src = "https://www.freevisitorcounters.com/en/home/counter/1344814/t/1"
    document.head.appendChild(counterScript)

    // Cleanup function
    return () => {
      document.head.removeChild(authScript)
      document.head.removeChild(counterScript)
    }
  }, [])

  return null
}
