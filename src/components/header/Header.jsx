import { useEffect, useState } from "react"
import { Filters } from "../filters/Filters"

export function Header(){
    return(
        <header>
            <h1>React shop 🛒</h1>
            <Filters/>
        </header>
    )
}