import React from "react";
import Modal from "./Modal";
import userImg from "../resources/images/Icon_user.png";
import "./styles/ProductEdit.css";

function ProductEdit(props) {
  //TODO: organice the component inputs, css clases

  return (
    <Modal isOpen={props.isOpen} onClose={props.onClose}>
      <section>
        <div className="productDetails">
          <div className="productDetails__img">
            <img src={userImg} alt="" />
          </div>
          <div className="productDetails__info">
            <p>ID: No se cambia</p>
            <hr />
            <p>Nombre:</p>
            <hr />
            <p>Cantidad:</p>
            <hr />
            <p>Estado:</p>
            <hr />
            <p>Tipo:</p>
            <hr />
            <p>Articulo:</p>
            <hr />
            <p>Descuento:</p>
            <hr />
            <p>Descripcion:</p>
            <hr />
          </div>
          <div className="productDetails__options">
            <button>Editar producto</button>
            <button onClick={props.onClose}>Cancelar</button>
          </div>
        </div>
      </section>
    </Modal>
  );
}

export default ProductEdit;
