import cn from "classnames"
import styles from "./Button.module.scss"

export default function Button({ text, icon, className, variant, size }) {
  const buttonClassnames = cn(
    styles.Button,
    className,
    icon && styles.has_icon,
    styles[variant],
    styles[size]
  )

  return (
    <button className={buttonClassnames}>
      <span>{text}</span>
      {icon && icon}
    </button>
  )
}
