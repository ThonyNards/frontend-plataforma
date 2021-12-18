import React from "react";
import Modal from "./Modal";

import userImg from "../resources/images/Icon_user.png";

import "./styles/ProductDetails.css";

function ProductDetails(props) {
  return (
    <Modal isOpen={props.isOpen} onClose={props.onClose}>
      <section>
        <div className="productDetails">
          <div className="productDetails__closeButton">
            <button>
              <img src="" alt="" />
            </button>
          </div>
          <div className="productDetails__img">
            <img src={userImg} alt="" />
          </div>
          <div className="productDetails__info">
            <p>ID:</p>
            <hr />
            <p>Nombre:</p>
            <hr />
            <p>Cantidad:</p>
            <hr />
            <p>Fecha de ingreso:</p>
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
            <button>Actualizar informacion</button>
            <button>Desactivar producto</button>
          </div>
        </div>
      </section>
    </Modal>
  );
}

export default ProductDetails;
