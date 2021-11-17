import styles from "./MenuItem.module.scss";

const MenuItem = ({ title, imageUrl, size }) => {
  return (
    <div className={`${styles["menu-item"]} ${styles[`${size}`]}`}>
      <div
        className={styles["background-image"]}
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
      <div className={styles.content}>
        <h1 className={styles.title}>{title.toUpperCase()}</h1>
        <span className={styles.subtitle}>Shop now</span>
      </div>
    </div>
  );
};

export default MenuItem;
