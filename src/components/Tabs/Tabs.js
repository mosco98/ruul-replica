import { TabContextProvider } from "./TabContext"

export default function Tabs({ children, defaultIndex }) {
  return (
    <TabContextProvider defaultIndex={defaultIndex}>
      {children}
    </TabContextProvider>
  )
}
