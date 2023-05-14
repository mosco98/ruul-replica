import { motion } from "framer-motion"
import styles from "./Accordion.module.scss"
import { useAccordionContext } from "./AccordionContext"

export default function AccordionItem({ title, content, index }) {
  const { currentIndex, setCurrentIndex } = useAccordionContext()

  const variants = {
    closed: { height: "0", marginTop: "0px", opacity: 0 },
    open: { height: "auto", marginTop: "8px", opacity: 1 }
  }

  return (
    <div className={styles.AccordionItem}>
      <div
        className="flex items-center justify-between cursor-pointer"
        onClick={() => setCurrentIndex(currentIndex === index ? null : index)}
      >
        <h5 className="font-medium tracking-[-0.04em] max-w-[90%]">{title}</h5>

        <span className="w-10 h-10 rounded-[4px] bg-primary flex items-center justify-center">
          <motion.svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="3.5"
            stroke="currentColor"
            className="w-3 h-3 text-secondary"
            animate={{
              transform:
                currentIndex === index ? "rotate(180deg)" : "rotate(0deg)"
            }}
            transition={{ ease: "easeInOut", duration: 0.25 }}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 8.25l-7.5 7.5-7.5-7.5"
            />
          </motion.svg>
        </span>
      </div>

      <motion.div
        variants={variants}
        initial="closed"
        animate={currentIndex === index ? "open" : "closed"}
        transition={{ ease: "easeInOut", duration: 0.35 }}
      >
        <h5 className="tracking-[-0.04em] max-w-[95%]">{content}</h5>
      </motion.div>
    </div>
  )
}
