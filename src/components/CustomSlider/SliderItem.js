import { AnimatePresence, motion } from "framer-motion"
import styles from "./Slider.module.scss"

export default function SliderItem({
  children,
  index,
  currentIndex,
  direction
}) {
  const variants = {
    enter: (direction) => {
      console.log("enter direction =>", direction)

      return {
        display: "none",
        x: `${100 * direction}%`
        // opacity: 0
      }
    },
    center: {
      display: "block",
      zIndex: 1,
      x: "0%"
      // opacity: 1
    },
    exit: (direction) => {
      console.log("exit direction =>", direction)

      return {
        display: "none",
        zIndex: 0,
        x: `${100 * direction}%`
        // opacity: 0
      }
    }
  }

  return (
    <AnimatePresence initial={false} custom={direction}>
      <motion.div
        custom={direction}
        variants={variants}
        initial="enter"
        animate="center"
        exit="exit"
        transition={{
          ease: "easeInOut",
          duration: 0.6,
          delay: 0.1
        }}
        className={styles.SliderItem}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  )
}
