import cn from "classnames"
import { motion } from "framer-motion"
import { useTabContext } from "./TabContext"
import styles from "./Tabs.module.scss"

export default function TabPanel({ children, index, className }) {
  const tabPanelClassnames = cn(styles.TabPanel, className)

  const { currentIndex } = useTabContext()

  return (
    <motion.div
      initial={{ opacity: 0, display: "none" }}
      animate={{
        opacity: currentIndex === index ? 1 : 0,
        display: currentIndex === index ? "block" : "none"
      }}
      transition={{ duration: 0.3 }}
      className={tabPanelClassnames}
    >
      <div>{children}</div>
    </motion.div>
  )
}
