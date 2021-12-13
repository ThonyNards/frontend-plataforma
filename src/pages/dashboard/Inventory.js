import React from "react";

import "./styles/Inventory.css";

class Inventory extends React.Component {
  render() {
    return (
      <React.Fragment>
        <section>
          <div className="inventory">
            <h1>Inventario</h1>
            <div className="inventoryBox ">
              <div className="row row-cols-3 inventoryBox__header">
                <div className="col filter">
                  <p>Filtro:</p>
                  <p>semanal</p>
                </div>
                <h2 className="col">Productos activos</h2>
                <div className="col searchBar">
                  <p>Buscar:</p>
                  <input type="text" />
                </div>
              </div>
              <div>
                <ul>
                  <li>ID</li>
                  <li>Nombre</li>
                  <li>Cantidad</li>
                </ul>
              </div>
              <div>
                <button>Crear nuevo producto</button>
                <button>Exportar en xlsx</button>
              </div>
            </div>
          </div>
        </section>
      </React.Fragment>
    );
  }
}

export default Inventory;
