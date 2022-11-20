import "./assets/css/App.css";

// Importarcomponentes
import Header from "./components/Header";
import Slider from "./components/Slider";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import SeccionPruebas from "./components/SeccionPruebas";
import Peliculas from "./components/Peliculas";

function App() {
  var buttonString = "Ver más";
  return (
    <div className="App">
      <Header />
      <Slider
        title="Bienvenido al curso de React con Víctor Robles de victorroblesweb.es"
        btn={buttonString}
      />
      <div className="center">
        <Peliculas />

        <Sidebar />
        <div className="clearfix"></div>
      </div>
      {/* END DIV CENTER */}
      <Footer />
    </div>
  );
}

export default App;
