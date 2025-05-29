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
    {
      image: "4.jpg",
      title: "Moana 2",
      description:
        "“Moana 2”, Moana ve Maui'yi üç yıl sonra, alışılmadık denizcilerden oluşan bir ekiple birlikte geniş kapsamlı yeni bir yolculuk için yeniden bir araya getiriyor. Yol gösterici atalarından beklenmedik bir çağrı alan Moana, daha önce karşılaşmadığı bir macera için Okyanusya'nın uzak denizlerine, tehlikeli ve uzun süredir bilinmeyen sularına yolculuk etmek zorunda. Yönetmenliğini David Derrick Jr., Jason Hand ve Dana Ledoux Miller'ın, yapımcılığını Christina Chen ve Yvett Merino'nun üstlendiği “Moana 2 ”nin müzikleri Grammy® ödüllü Abigail Barlow ve Emily Bear, Grammy adayı Opetaia Foa ile, üç kez Grammy kazanan Mark Mancina'ya ait.",
    },
  ];

  return (
    <div>
      <h2>Movie List</h2>
      <div id="movie-list">
        {movie_list.map((m, index) => (
          <Movie key={index} movieObj={m} />
        ))}
      </div>
    </div>
  );
}

function Movie({ movieObj }) {
  return (
    <div className="movie">
      <img src={"/img/" + movieObj.image} alt="" />
      <h3>{movieObj.title}</h3>
      <p>{movieObj.description}</p>
    </div>
  );
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
