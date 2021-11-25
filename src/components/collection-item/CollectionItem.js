import styles from "./CollectionItem.module.scss";

const CollectionItem = ({ id, name, imageUrl, price }) => {
  return (
    <div className={styles["collection-item"]}>
      <div
        className={styles.image}
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
      <div className={styles["collection-footer"]}>
        <span className={styles.name}>{name}</span>
        <span className={styles.price}>{price}</span>
      </div>
    </div>
  );
};

export default CollectionItem;
