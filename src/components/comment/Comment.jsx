/* eslint-disable react/prop-types */
import { FaThumbsUp, FaTrash } from "react-icons/fa";
import styles from "./comment.module.css";
import { useState } from "react";

export function Comment({ content }) {
  const [counter, setCounter] = useState(0);

  function handleLike() {
    setCounter(counter + 1);
    console.log(counter);
  }
  return (
    <>
      <div className={styles.comment}>
        <img
          className={styles.avatar}
          src="https://avatars.githubusercontent.com/u/135350341?v=4&size=64"
        />
        <div className={styles.author}>
          <div className={styles.authorInfoContainer}>
            <div className={styles.authorInfo}>
              <strong>Rodolpho Reis</strong>
              <time
                className={styles.time}
                title="09 de setembro às 20:34"
                dateTime="2024-09-09 20:33:20"
              >
                há 2 dias
              </time>
              <span>{content}</span>
            </div>

            <button title="Deletar comentário" className={styles.buttonDelete}>
              <FaTrash className={styles.icon} />
            </button>
          </div>
          <button className={styles.buttonThumbsUp}>
            <FaThumbsUp className={styles.icon} />
            <span>Aplaudir • 03</span>
          </button>
        </div>
      </div>
    </>
  );
}
