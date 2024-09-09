import styles from "./sidebar.module.css";
import { FiEdit } from "react-icons/fi";

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img
        className={styles.cover}
        src="https://images.pexels.com/photos/5483071/pexels-photo-5483071.jpeg?auto=compress&cs=tinysrgb&w=560&h=350&dpr=2"
      />
      <div className={styles.profile}>
        <strong className={styles.name}>Rodolpho Reis</strong>
        <span className={styles.job}>Web Developer</span>
      </div>
      <footer>
        <a href="#">
          <FiEdit style={{ marginRight: "10px" }} />
          Editar seu perfil
        </a>
      </footer>
    </aside>
  );
}
