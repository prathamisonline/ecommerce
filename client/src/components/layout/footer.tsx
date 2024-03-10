import { BsGithub, BsTwitter } from "react-icons/bs";
import styles from "./Layout.module.scss";

const Footer = () => {
  const date = new Date();
  return (
    <footer>
      <div>&copy; {date?.getFullYear()} Nike</div>
      <div className={styles["social"]}>
        <a href={`https://github.com/prathamisonline`} target="blank">
          <BsGithub />
        </a>

        <a href={`https://twitter.com/prathamisonline`} target="blank">
          <BsTwitter />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
