import React from "react";

import ProductDetails from "../../components/ProductDetails";
import ProductEdit from "../../components/ProductEdit";
import ProductNew from "../../components/ProductNew";
import "./styles/Inventory.css";

function Inventory(props) {
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
              {/* TODO: open modal when someone clicks on the item */}
              <div className="row row-cols-7 inventory__itemList-header">
                <div className="col-1">ID</div>
                <div className="col">Nombre</div>
                <div className="col">Cantidad actual</div>
                <div className="col">Precio</div>
                <div className="col">Tipo</div>
                <div className="col-2">Descripcion</div>
              </div>
              <hr />

              <div
                className="row row-cols-7 inventory__itemList-item"
                onClick={props.onOpenProductDetailsModal}
              >
                <div className="col-1">456</div>
                <div className="col">Raqueta electrica</div>
                <div className="col">20</div>
                <div className="col">$ 5.000</div>
                <div className="col">Aparato electronico</div>
                <div className="col-2">Producto para ....</div>

                <hr />
              </div>
              <ProductDetails
                isOpen={props.productDetailsModal}
                onClose={props.onCloseProductDetailsModal}
                productEditModalIsOpen={props.productEditModal}
                productEditModalOnClose={props.onCloseProductEditModal}
                onOpenProductEditModal={props.onOpenProductEditModal}
              ></ProductDetails>

              <ProductNew
                isOpen={props.productNewModal}
                onClose={props.onCloseProductNewModal}
              ></ProductNew>
            </div>
            <div className="row inventory__options">
              <button onClick={props.onOpenProductNewModal}>
                Crear nuevo producto
              </button>
              <button>Exportar en xlsx</button>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}

export default Inventory;
