import styles from "./sidebar.module.css";
import { FiEdit } from "react-icons/fi";

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img
        className={styles.cover}
        src="https://media.licdn.com/dms/image/v2/D4D16AQHDoIcifC6Wtg/profile-displaybackgroundimage-shrink_350_1400/profile-displaybackgroundimage-shrink_350_1400/0/1718380155312?e=1731542400&v=beta&t=8d25BhpGHw7nT10UlFiIKsfI8__P2PmEOTYog5A9uMg"
      />
      <div className={styles.profile}>
        <img src="https://avatars.githubusercontent.com/u/135350341?v=4&size=64" />
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
