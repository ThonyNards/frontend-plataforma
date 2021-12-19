import React from "react";

import Inventory from "./Inventory";

class InventoryContainer extends React.Component {
  state = {
    loading: true,
    error: null,
    data: undefined,
    productDetailsModal: false,
    productNewModal: false,
    productEditModal: false,
  };

  componentDidMount() {
    this.fetchData();
  }

  fetchData = async () => {
    //this.setState({loading: true, error: null});
  };

  handleProductDetailsOpenModal = (e) => {
    this.setState({ productDetailsModal: true });
    console.log("abrir");
    console.log(this.state.productDetailsModal);
  };

  handleProductDetailsCloseModal = (e) => {
    this.setState({ productDetailsModal: false });
    console.log("cerrar");
    console.log(this.state.productDetailsModal);
  };

  handleProductNewOpenModal = (e) => {
    this.setState({ productNewModal: true });
  };

  handleProductNewCloseModal = (e) => {
    this.setState({ productNewModal: false });
  };

  handleProductEditOpenModal = (e) => {
    this.setState({ productEditModal: true });
    console.log(this.state.productEditModal);
  };

  handleProductEditCloseModal = (e) => {
    this.setState({ productEditModal: false });
  };

  render() {
    // if (this.state.loading) {
    //   return <div>cargando...</div>;
    // }

    if (this.state.error) {
      return <div>error...</div>;
    }

    return (
      <Inventory
        onOpenProductDetailsModal={this.handleProductDetailsOpenModal}
        onCloseProductDetailsModal={this.handleProductDetailsCloseModal}
        productDetailsModal={this.state.productDetailsModal}
        onOpenProductNewModal={this.handleProductNewOpenModal}
        onCloseProductNewModal={this.handleProductNewCloseModal}
        productNewModal={this.state.productNewModal}
        onOpenProductEditModal={this.handleProductEditOpenModal}
        onCloseProductEditModal={this.handleProductEditCloseModal}
        productEditModal={this.state.productEditModal}
        inventoryInfo={this.state.data}
      ></Inventory>
    );
  }
}

export default InventoryContainer;
