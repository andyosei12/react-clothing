import Directory from "../../components/directory/Directory";
import styles from "./Homepage.module.scss";

const Homepage = () => {
  return (
    <div className={styles.homepage}>
      <Directory />
    </div>
  );
};
export default Homepage;
