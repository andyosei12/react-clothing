import { withRouter } from "react-router-dom";
import styles from "./MenuItem.module.scss";

const MenuItem = ({ title, imageUrl, size, history, linkUrl, match }) => {
  return (
    <div
      className={`${styles["menu-item"]} ${styles[`${size}`]}`}
      onClick={() => history.push(`${match.url}${linkUrl}`)}
    >
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

export default withRouter(MenuItem);
