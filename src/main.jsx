import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
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
      <nav
        className="navbar navbar-expand-lg bg-dark border-bottom border-body"
        data-bs-theme="dark"
      >
        <div className="container">
          <a href="#" className="navbar-brand">
            MovieApp
          </a>
        </div>
      </nav>
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
      is_active: true,
      is_new: true,
    },
    {
      image: "2.jpg",
      title: "Araba Hırsızlar",
      description:
        "Gündüzleri lüks bir otelde çalışan sıradan görevlilerdir: valeler, garsonlar, barmenler... Ancak geceleri, zengin müşterileri gözlerine kestirip yolda soydukları usta araba hırsızlarına dönüşürler. Büyük bir soygun planı yaparlarken, otelin yöneticisi onların peşine acımasız bir tetikçi salar. Tehlike giderek yaklaşırken, Nora, Zoe, Steve ve Prestance hayatlarının en büyük vurgununu gerçekleştirebilecekler mi?",
      is_active: true,
      is_new: true,
    },
    {
      image: "3.jpg",
      title: "The Codes of War",
      description:
        "War stories about family, ethics and honor include the true story of two U.S. Marines who in a span of six seconds, must stand their ground to stop a suicide truck bomb, a Navy Corpsman who attempts to hold on to his humanity, and a WW2 soldier who gets separated from his squad and is forced to re-evaluate his code.",
      is_active: true,
      is_new: true,
    },
    {
      image: "4.jpg",
      title: "Moana 2",
      description:
        "“Moana 2”, Moana ve Maui'yi üç yıl sonra, alışılmadık denizcilerden oluşan bir ekiple birlikte geniş kapsamlı yeni bir yolculuk için yeniden bir araya getiriyor. Yol gösterici atalarından beklenmedik bir çağrı alan Moana, daha önce karşılaşmadığı bir macera için Okyanusya'nın uzak denizlerine, tehlikeli ve uzun süredir bilinmeyen sularına yolculuk etmek zorunda. Yönetmenliğini David Derrick Jr., Jason Hand ve Dana Ledoux Miller'ın, yapımcılığını Christina Chen ve Yvett Merino'nun üstlendiği “Moana 2 ”nin müzikleri Grammy® ödüllü Abigail Barlow ve Emily Bear, Grammy adayı Opetaia Foa ile, üç kez Grammy kazanan Mark Mancina'ya ait.",
      is_active: true,
      is_new: false,
    },
  ];

  return (
    <div className="container">
      <h2 className="title">Movie List</h2>

      {movie_list.filter((m) => m.is_active).length == 0 ? (
        <div>Film bulunamadı</div>
      ) : (
        <div
          id="movie-list"
          className="row row-cols-2 row-cols-md-3 row-cols-lg-4 g-4"
        >
          {movie_list.map((m, index) => (
            <Movie key={index} movieObj={m} />
          ))}
        </div>
      )}
    </div>
  );
}

function Movie({ movieObj }) {
  return (
    <div className="col">
      {movieObj.is_active && (
        <div className="card movie position-relative">
          <img src={"/img/" + movieObj.image} alt="" className="card-img-top" />
          <div className="card-body">
            <h2 className="h5 card-title">{movieObj.title}</h2>
            <p className="card-text mb-0">{movieObj.description}</p>
            {movieObj.is_new && (
              <span className="position-absolute top-0 end-0 badge bg-danger m-1">
                New
              </span>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
