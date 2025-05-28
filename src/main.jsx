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
  // const imageUrl = "1.jpg";
  // const title = "Kaptan Amerika";
  // const description = "Kaptan Amerika: Cesur Yeni Dünya, Kaptan Amerika'nın maceralarını konu ediyor. Amerika Birleşik Devletleri'nin yeni Başkanı Thaddeus Ross ile tanıştıktan kısa bir süre sonra Kaptan Amerika olarak da bilinen Sam Wilson, kendisini devasa bir uluslararası olayın tam ortasında bulur. Operasyonun gerçek dehası tüm dünyayı ateşe vermeden önce Sam Wilson zamana karşı amansız bir savaşa girişir.";

  const imageObj = {
    image: "1.jpg",
    title: "Kaptan Amerika: Cesur Yeni Dünya",
    description:
      "Kaptan Amerika: Cesur Yeni Dünya, Kaptan Amerika'nın maceralarını konu ediyor. Amerika Birleşik Devletleri'nin yeni Başkanı Thaddeus Ross ile tanıştıktan kısa bir süre sonra Kaptan Amerika olarak da bilinen Sam Wilson, kendisini devasa bir uluslararası olayın tam ortasında bulur. Operasyonun gerçek dehası tüm dünyayı ateşe vermeden önce Sam Wilson zamana karşı amansız bir savaşa girişir.",
  };

  return (
    <div className="movie">
      <img src={"/img/" + imageObj.image} alt="" />
      <h3>{imageObj.title}</h3>
      <p>{imageObj.description}</p>
    </div>
  );
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
