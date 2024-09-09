/* eslint-disable react/prop-types */
import { Header } from "./components/header/Header";
import "./styles/styles.css";
export function App({ autor }) {
  console.log(autor);
  return (
    <>
      <Header />
    </>
  );
}
