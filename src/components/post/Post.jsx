/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import styles from "./post.module.css";
import { format, formatDistanceToNow } from "date-fns";
import { ptBR } from "date-fns/locale/pt-BR";
import { Comment } from "../comment/Comment";
import { useState } from "react";
export function Post({ author, content, publishedAt }) {
  const [comments, setComments] = useState(["Muito bom Rodolpho, parabéns!"]);
  const [newComment, setNewComment] = useState("");
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

  function handleSubmit(event) {
    event.preventDefault();

    if (!newComment) {
      return;
    }

    setComments([...comments, newComment]);

    setNewComment("");
  }

  return (
    <article className={styles.post}>
      <header className={styles.header}>
        <div className={styles.author}>
          <img className={styles.avatar} src={author.avatar} />
          <div className={styles.authorInfo}>
            <strong>{author.name}</strong>
            <span>{author.job}</span>
          </div>
        </div>
        <time
          className={styles.time}
          title={formattedDate}
          dateTime={publishedAt.toISOString()}
        >
          {formattedTimeAgo}
        </time>
      </header>
      <div className={styles.content}>
        {content.map((item, i) => {
          if (item.type === "paragraph") {
            return <p key={i}>{item.content}</p>;
          } else if (item.type === "link") {
            return (
              <p key={i}>
                <a
                  href={item.content}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {item.content}
                </a>
              </p>
            );
          }
          return null;
        })}
      </div>
      <form className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>
        <textarea
          value={newComment}
          name="comment"
          onChange={(e) => setNewComment(e.target.value)}
          placeholder="Deixe um comentário"
        />
        <footer>
          <button type="submit">Publicar</button>
        </footer>
      </form>
    </article>
  );
}
