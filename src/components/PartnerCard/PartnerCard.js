import styles from "./PartnerCard.module.scss";

export default function PartnerCard({ children }) {
  return <div className={styles.PartnerCard}>{children}</div>;
}
