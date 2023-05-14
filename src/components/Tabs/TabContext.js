const { createContext, useContext, useState, useEffect } = require("react")

const TabContext = createContext()

export const useTabContext = () => useContext(TabContext)

export function TabContextProvider({ children, defaultIndex }) {
  const [currentIndex, setCurrentIndex] = useState()

  useEffect(() => {
    if (defaultIndex) {
      setCurrentIndex(defaultIndex)
    } else {
      setCurrentIndex(0)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const value = { currentIndex, setCurrentIndex }

  return <TabContext.Provider value={value}>{children}</TabContext.Provider>
}
