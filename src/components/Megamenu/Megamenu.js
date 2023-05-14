import classNames from "classnames"
import { AnimatePresence, motion } from "framer-motion"
import { useEffect, useRef, useState } from "react"
import styles from "./Megamenu.module.scss"

export default function Megamenu({ title, children }) {
  const [showOptions, setShowOptions] = useState(false)
  const ref = useRef()

  const handleClickOutside = (event) => {
    if (ref.current && !ref.current.contains(event.target)) {
      setShowOptions(false)
    }
  }

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside)

    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  return (
    <div className={styles.Megamenu} ref={ref}>
      <div
        className="flex items-center space-x-2 cursor-pointer"
        onClick={() => setShowOptions(!showOptions)}
      >
        <span
          className={classNames(
            "text-[20px] leading-5 select-none",
            showOptions && "text-lightPrimary"
          )}
        >
          {title}
        </span>
        <motion.svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="3.2"
          stroke="currentColor"
          className="w-4 h-4"
          // initial={{ transform: "rotate(0deg)" }}
          animate={{
            transform: showOptions ? "rotate(180deg)" : "rotate(0deg)"
          }}
          transition={{ type: "spring", bounce: 0.2 }}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19.5 8.25l-7.5 7.5-7.5-7.5"
          />
        </motion.svg>
      </div>

      <AnimatePresence>
        {showOptions && (
          <motion.div
            initial={{ y: 10 }}
            animate={{ y: 0 }}
            exit={{ opacity: 0, transition: { duration: 0.2 } }}
            transition={{ ease: "easeInOut", duration: 0.35 }}
            className={styles.dropdown}
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
