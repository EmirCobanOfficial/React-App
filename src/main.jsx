import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

function App() {
  return (
    <>
      <Header />
      <MovieList />
    </>
  );
}

function Header() {
  return (
    <div id="Header">
      <h1>Header</h1>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam ad, odit
        veniam repudiandae deleniti ratione tenetur quam eos vitae inventore
        praesentium cupiditate! Non magnam esse repellendus, aspernatur
        distinctio nisi dolorum!
      </p>
    </div>
  );
}

function MovieList() {
  return (
    <div>
      <h2>Movie List</h2>
      <div id="movie-list">
        <Movie />
        <Movie />
        <Movie />
      </div>
    </div>
  );
}

function Movie() {
  return (
    <div className="movie">
      <h3>Movie</h3>
      <p>Film açıklaması</p>
    </div>
  );
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
