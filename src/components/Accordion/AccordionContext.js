import { createContext, useContext, useEffect, useState } from "react"

const AccordionContext = createContext()

export const useAccordionContext = () => useContext(AccordionContext)

export function AccordionContextProvider({ children, defaultIndex }) {
  const [currentIndex, setCurrentIndex] = useState()

  useEffect(() => {
    if (defaultIndex) {
      setCurrentIndex(defaultIndex)
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const value = { currentIndex, setCurrentIndex }

  return (
    <AccordionContext.Provider value={value}>
      {children}
    </AccordionContext.Provider>
  )
}
