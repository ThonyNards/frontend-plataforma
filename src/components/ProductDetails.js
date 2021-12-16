import React from "react";
import userImg from "../resources/images/Icon_user.png";

import "./styles/ProductDetails.css";

class ProductDetails extends React.Component {
  render() {
    return (
      <React.Fragment>
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
              <p>Nombre:</p>
              <p>Cantidad:</p>
              <p>Fecha de ingreso:</p>
              <p>Estado:</p>
              <p>Tipo:</p>
              <p>Articulo:</p>
              <p>Descuento:</p>
              <p>Descripcion:</p>
            </div>
            <div className="productDetails__options row row-cols-1">
              <button>Actualizar informacion</button>
              <button>Desactivar producto</button>
            </div>
          </div>
        </section>
      </React.Fragment>
    );
  }
}

export default ProductDetails;
