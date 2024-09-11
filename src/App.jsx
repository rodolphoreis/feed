import { Header } from "./components/header/Header";
import "./styles/styles.css";
export function App() {
  const posts = [
    {
      id: 1,
      author: {
        name: "Rodolpho Reis",
        avatar: "https://avatars.githubusercontent.com/u/135350341?v=4&size=64",
        job: "Web Developer",
      },
      content: [
        {
          type: "paragraph",
          content: "Fala galera 👋",
        },
        {
          type: "paragraph",
          content:
            "Acabei de subir mais um projeto no meu portfólio. É um projeto simples, para eu treinar meu css. O nome do projeto é DoctorCare 🚀",
        },
        {
          type: "link",
          content: "@reis.design/doctorcare",
        },
      ],
      publishedAt: new Date("2024-09-11 17:22:00"),
    },
    {
      id: 2,
      author: {
        name: "Pedro Daniel",
        avatar: "https://avatars.githubusercontent.com/u/59892368?v=4",
        job: "Devops",
      },
      content: [
        {
          type: "paragraph",
          content: "Fala Devs 😀",
        },
        {
          type: "paragraph",
          content:
            "Sou Devops a 5 anos. Hoje estou trabalhando em Portugal e estou gostando muito da minha nova equipe.",
        },
        {
          type: "link",
          content: "@pedro_daniel/devops/devops",
        },
      ],
      publishedAt: new Date("2024-09-08 14:10:00"),
    },
  ];

  return (
    <>
      <Header />
    </>
  );
}
