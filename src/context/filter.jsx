import { createContext, useState } from "react";

export const FiltersContext = createContext()

export function FilterProvider ({ children }) {
    const [filters, setFilters] = useState({
        category: 'all',
        price: 0
    })
    return(
        <FiltersContext.Provider value={{
            filters,
            setFilters
        }}
        >
            { children } 
        </FiltersContext.Provider>
    )
}