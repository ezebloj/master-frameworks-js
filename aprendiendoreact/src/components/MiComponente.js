import React, { Component } from "react";

class MiComponente extends Component {
  render() {
    let receta = {
      nombre: "Pizza",
      ingredientes: ["Tomate", "Queso", "Jamón cocido"],
      calorias: 400,
    };

    return (
      <div className="mi -componente">
        <h1>{"Receta: " + receta.nombre}</h1>
        <h2>{"Calorías: " + receta.calorias}</h2>
        <ol>
          {
            // el método map lo que hace es recorrerme un array y sacarme los datos
            receta.ingredientes.map((ingrediente, i) => {
              console.log(ingrediente);
              return <li key={i}>{ingrediente}</li>;
            })
          }
        </ol>
        <hr />
      </div>
    );
  }
}

export default MiComponente;
