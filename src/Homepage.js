import styles from "./Homepage.module.scss";

const Homepage = () => {
  return (
    <div className={styles.homepage}>
      <div className={styles["directory-menu"]}>
        <div className={styles["menu-item"]}>
          <div className={styles.content}>
            <h1 className={styles.title}>Hats</h1>
            <span className={styles.subtitle}>Shop now</span>
          </div>
        </div>
        <div className={styles["menu-item"]}>
          <div className={styles.content}>
            <h1 className={styles.title}>Jackets</h1>
            <span className={styles.subtitle}>Shop now</span>
          </div>
        </div>
        <div className={styles["menu-item"]}>
          <div className={styles.content}>
            <h1 className={styles.title}>Sneakers</h1>
            <span className={styles.subtitle}>Shop now</span>
          </div>
        </div>
        <div className={styles["menu-item"]}>
          <div className={styles.content}>
            <h1 className={styles.title}>Womens</h1>
            <span className={styles.subtitle}>Shop now</span>
          </div>
        </div>
        <div className={styles["menu-item"]}>
          <div className={styles.content}>
            <h1 className={styles.title}>Mens</h1>
            <span className={styles.subtitle}>Shop now</span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Homepage;
