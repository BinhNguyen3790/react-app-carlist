import { Component } from "react";
import Model from "./Model";
import ProductList from "./ProductList";

export default class ExerciseCarStore extends Component {
  state = {
    id: 1,
    name: "black car",
    img: "./assets/imgs/products/black-car.jpg",
    price: 1000,
  };

  products = [
    { id: 1, name: "black car", img: "./assets/imgs/products/black-car.jpg", price: 1000 },
    { id: 2, name: "red car", img: "./assets/imgs/products/red-car.jpg", price: 2000 },
    { id: 3, name: "silver car", img: "./assets/imgs/products/silver-car.jpg", price: 3000 },
    { id: 4, name: "steel car", img: "./assets/imgs/products/steel-car.jpg", price: 4000 },
  ];

  renderState = (newState) => {
    this.setState(newState);
  };

  render() {
    return (
      <div className="p-5">
        <h2 className="text-center mb-5">List Car</h2>
        <div className="container">
          <Model stateData={this.state} />
          <ProductList detailData={this.renderState} productData={this.products} />
        </div>
      </div>
    );
  }
}
