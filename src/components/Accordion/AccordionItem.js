import { motion } from "framer-motion"
import styles from "./Accordion.module.scss"
import { useAccordionContext } from "./AccordionContext"

export default function AccordionItem({ title, content, index }) {
  const { currentIndex, setCurrentIndex } = useAccordionContext()

  const variants = {
    closed: { height: "0", marginTop: "0px", opacity: 0 },
    open: { height: "auto", marginTop: "12px", opacity: 1 }
  }

  return (
    <div className={styles.AccordionItem}>
      <div
        className="flex cursor-pointer items-center justify-between"
        onClick={() => setCurrentIndex(currentIndex === index ? null : index)}
      >
        <h5 className="max-w-[80%] md:max-w-[90%] font-medium tracking-[-0.04em]">
          {title}
        </h5>

        <span className="flex h-10 w-10 items-center justify-center rounded-[4px] bg-primary">
          <motion.svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="3.5"
            stroke="currentColor"
            className="h-3 w-3 text-secondary"
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
        <h5 className="max-w-full md:max-w-[95%] tracking-[-0.04em]">
          {content}
        </h5>
      </motion.div>
    </div>
  )
}
