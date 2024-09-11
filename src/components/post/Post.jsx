/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import styles from "./post.module.css";
import { format, formatDistanceToNow } from "date-fns";
import { ptBR } from "date-fns/locale/pt-BR";
export function Post({ author, content, publishedAt }) {
  const formattedDate = format(
    publishedAt,
    "d 'de' MMMM 'de' yyyy 'às' HH:mm'h'",
    {
      locale: ptBR,
    }
  );
  const formattedTimeAgo = formatDistanceToNow(publishedAt, {
    locale: ptBR,
    addSuffix: true,
  });

  return (
    <article className={styles.post}>
      <header className={styles.header}>
        <div className={styles.author}>
          <img
            className={styles.avatar}
            src="https://avatars.githubusercontent.com/u/135350341?v=4&size=64"
          />
          <div className={styles.authorInfo}>
            <strong>Rodolpho Reis</strong>
            <span>Web Developer</span>
          </div>
        </div>
        <time
          className={styles.time}
          title="09 de setembro às 20:34"
          dateTime="2024-09-09 20:33:20"
        >
          Publicado há 1h
        </time>
      </header>
      <div className={styles.content}>
        <p>Fala galera 👋</p>

        <p>
          Acabei de subir mais um projeto no meu portfólio. É um projeto
          simples, para eu treinar meu css. O nome do projeto é DoctorCare 🚀
        </p>

        <p>
          <a href="#">reis.design/doctorcare</a>
        </p>

        <p>
          <a href="#">#novoprojeto</a> <a href="#"> #devReis </a>{" "}
          <a href="#">#reis</a>{" "}
        </p>
      </div>
      <form className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>
        <textarea placeholder="Deixe um comentário" />
        <footer>
          <button type="submit">Publicar</button>
        </footer>
      </form>
    </article>
  );
}
