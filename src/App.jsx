/* eslint-disable react/prop-types */
import "./styles/styles.css";
export function App({ autor }) {
  console.log(autor);
  return (
    <>
      <div>
        <h1>Olá {autor}</h1>
      </div>
    </>
  );
}
