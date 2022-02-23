import { Link } from "react-router-dom";
import styles from "./CollectionPreview.module.scss";
import CollectionItem from "../collection-item/CollectionItem";

const CollectionPreview = ({ title, items, path }) => {
  return (
    <div className={styles["collection-preview"]}>
      <Link to={`${path.url}/${title.toLowerCase()}`}>
        <h1 className={styles.title}>{title.toUpperCase()}</h1>
      </Link>
      <div className={styles.preview}>
        {items
          .filter((item, idx) => idx < 4)
          .map((item) => (
            <CollectionItem key={item.id} item={item} />
          ))}
      </div>
    </div>
  );
};

export default CollectionPreview;
