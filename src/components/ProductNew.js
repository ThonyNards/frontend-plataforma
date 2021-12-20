import React from "react";
import Modal from "./Modal";
import userImg from "../resources/images/Icon_user.png";
import "./styles/ProductNew.css";

function ProductNew(props) {
  //TODO: organice the component inputs, css clases

  return (
    <Modal isOpen={props.isOpen} onClose={props.onClose}>
      <section>
        <div className="productNew">
          <div className="productNew__img">
            <img src={userImg} alt="" />
          </div>
          <div className="productNew__info">
            <p>ID:</p>
            <input type="text" />
            <hr />
            <p>Nombre:</p>
            <input type="text" />
            <hr />
            <p>Cantidad:</p>
            <input type="text" />
            <hr />
            <p>Tipo:</p>
            <input type="text" />
            <hr />
            <p>Articulo de temporada:</p>
            <input
              className="form-check-input"
              type="checkbox"
              value=""
              id="flexCheckDefault"
            />

            <hr />
            <p>Descuento:</p>
            <input type="text" />
            <hr />
            <p>Descripcion:</p>
            <input type="text" />
            <hr />
          </div>
          <div className="productNew__options">
            <button>Crear producto</button>
            <button onClick={props.onClose}>Cancelar</button>
          </div>
        </div>
      </section>
    </Modal>
  );
}

export default ProductNew;
