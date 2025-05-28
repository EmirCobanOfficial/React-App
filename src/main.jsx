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
  const movie_list = [
    {
      image: "1.jpg",
      title: "Kaptan Amerika",
      description:
        "Kaptan Amerika: Cesur Yeni Dünya, Kaptan Amerika'nın maceralarını konu ediyor. Amerika Birleşik Devletleri'nin yeni Başkanı Thaddeus Ross ile tanıştıktan kısa bir süre sonra Kaptan Amerika olarak da bilinen Sam Wilson, kendisini devasa bir uluslararası olayın tam ortasında bulur. Operasyonun gerçek dehası tüm dünyayı ateşe vermeden önce Sam Wilson zamana karşı amansız bir savaşa girişir",
    },
    {
      image: "2.jpg",
      title: "Araba Hırsızlar",
      description:
        "Gündüzleri lüks bir otelde çalışan sıradan görevlilerdir: valeler, garsonlar, barmenler... Ancak geceleri, zengin müşterileri gözlerine kestirip yolda soydukları usta araba hırsızlarına dönüşürler. Büyük bir soygun planı yaparlarken, otelin yöneticisi onların peşine acımasız bir tetikçi salar. Tehlike giderek yaklaşırken, Nora, Zoe, Steve ve Prestance hayatlarının en büyük vurgununu gerçekleştirebilecekler mi?",
    },
    {
      image: "3.jpg",
      title: "The Codes of War",
      description:
        "War stories about family, ethics and honor include the true story of two U.S. Marines who in a span of six seconds, must stand their ground to stop a suicide truck bomb, a Navy Corpsman who attempts to hold on to his humanity, and a WW2 soldier who gets separated from his squad and is forced to re-evaluate his code.",
    },
  ];

  return (
    <div>
      <h2>Movie List</h2>
      <div id="movie-list">
        <Movie
          image={movie_list[0].image}
          title={movie_list[0].title}
          description={movie_list[0].description}
        />
        <Movie
          image={movie_list[1].image}
          title={movie_list[1].title}
          description={movie_list[1].description}
        />
        <Movie
          image={movie_list[2].image}
          title={movie_list[2].title}
          description={movie_list[2].description}
        />
      </div>
    </div>
  );
}

function Movie(props) {
  console.log(props);

  return (
    <div className="movie">
      <img src={"/img/" + props.image} alt="" />
      <h3>{props.title}</h3>
      <p>{props.description}</p>
    </div>
  );
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
