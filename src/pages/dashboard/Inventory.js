import React from "react";

import "./styles/Inventory.css";

class Inventory extends React.Component {
  render() {
    return (
      <React.Fragment>
        <section>
          <div className="inventory">
            <h1>Inventario</h1>
            <div className="inventory__panel">
              <div className="row row-cols-3 inventoryPanel__header">
                <div className="col filter">
                  <p>Filtro: semanal</p>
                </div>
                <h2 className="col">Productos activos</h2>
                <div className="col searchBar">
                  <input type="text" placeholder="Buscar" />
                </div>
              </div>
              <div className="row inventory__itemList">
                <div className="row row-cols-7 inventory__itemList-header">
                  <div className="col-1">ID</div>
                  <div className="col">Nombre</div>
                  <div className="col">Cantidad actual</div>
                  <div className="col">Precio</div>
                  <div className="col">Tipo</div>
                  <div className="col-2">Descripcion</div>
                </div>
                <hr />

                <div className="row row-cols-7 inventory__itemList-item">
                  <div className="col-1">456</div>
                  <div className="col">Raqueta electrica</div>
                  <div className="col">20</div>
                  <div className="col">$ 5.000</div>
                  <div className="col">Aparato electronico</div>
                  <div className="col-2">Producto para ....</div>
                  <hr />
                </div>
                <div className="row row-cols-7 inventory__itemList-item">
                  <div className="col-1">456</div>
                  <div className="col">Raqueta electrica</div>
                  <div className="col">20</div>
                  <div className="col">$ 5.000</div>
                  <div className="col">Aparato electronico</div>
                  <div className="col-2">Producto para ....</div>
                  <hr />
                </div>
              </div>
              <div className="row inventory__options">
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
