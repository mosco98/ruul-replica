import cn from "classnames"
import { useTabContext } from "./TabContext"
import styles from "./Tabs.module.scss"

export default function Tab({ title, index, className }) {
  const { currentIndex, setCurrentIndex } = useTabContext()

  const clickHandler = () => {
    if (currentIndex !== index) {
      setCurrentIndex(index)
    }
  }

  const tabClassnames = cn(
    styles.Tab,
    currentIndex === index && styles.active,
    className
  )

  return (
    <span className={tabClassnames} onClick={clickHandler}>
      {title}
    </span>
  )
}
