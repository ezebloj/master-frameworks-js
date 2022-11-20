import React, { Component } from "react";
import Pelicula from "./Pelicula";

class Peliculas extends Component {
  state = {};

  cambiarTitulo = () => {
    var { peliculas } = this.state;
    //var random = Math.floor(Math.random() * 3);

    peliculas[0].titulo = "Batman Begins";

    this.setState({ peli: peliculas });
  };

  favorita = (pelicula, indice) => {
    console.log("FAVORITA MARCADA");
    console.log(pelicula, indice);
    this.setState({
      favorita: pelicula,
    });
  };

  componentWillMount() {
    // alert("Se va a montar el componente");
    this.setState({
      peliculas: [
        {
          titulo: "Batman vs Superman",
          image:
            "https://img.elcomercio.pe/files/article_content_ec_fotos/uploads/2017/03/21/58d1b6084dceb.jpeg",
        },
        {
          titulo: "Gran Torino",
          image:
            "https://estaticos-cdn.elperiodico.com/clip/14512484-fcc5-4bf6-a5d6-2ee06b819eb8_alta-libre-aspect-ratio_default_0.jpg",
        },
        {
          titulo: "Looper",
          image:
            "https://cdn2.actitudfem.com/media/files/styles/large/public/images/2012/10/looper.jpg",
        },
      ],
      nombre: "Ezequiel Bloj",
      favorita: {},
    });
  }

  componentDidMount() {
    // alert("Ya se ha montado el componente");
  }

  componentWillUnmount() {
    // alert("Me voy a desmontar");
  }

  render() {
    var pStyle = {
      background: "green",
      color: "white",
      padding: "10px",
    };

    // var favorita;
    // if (this.state.favorita.titulo) {
    //   favorita = (
    //     <p className="favorita" style={pStyle}>
    //       <strong>La película favorita es: </strong>
    //       <span>{this.state.favorita.titulo}</span>
    //     </p>
    //   );
    // } else {
    //   favorita = <p>NO HAY PELICULA FAVORITA</p>;
    // }

    return (
      <div id="content" className="peliculas">
        <h2 className="subheader">Películas</h2>
        <p>Selección de las películas favoritas de {this.state.nombre}</p>
        <div>
          <button onClick={this.cambiarTitulo}>Cambiar título de Batman</button>
        </div>

        {this.state.favorita.titulo ? (
          <p className="favorita" style={pStyle}>
            <strong>La película favorita es: </strong>
            <span>{this.state.favorita.titulo}</span>
          </p>
        ) : (
          <p>NO HAY PELICULA FAVORITA</p>
        )}

        {/* {favorita} */}

        {/*Crear componente película */}

        <div id="articles" className="peliculas">
          {this.state.peliculas.map((pelicula, i) => {
            return (
              <Pelicula
                key={i}
                pelicula={pelicula}
                indice={i}
                marcarFavorita={this.favorita}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

export default Peliculas;
