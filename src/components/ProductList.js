import { Component } from "react";
import ProductItem from "./ProductItem";

export default class ProductList extends Component {
  renderProduct = () => {
    return this.props.productData.map((product, index) => {
      return (
        <div className="col-3" key={index}>
          <ProductItem detailData={this.props.detailData} item={product} />
        </div>
      );
    });
  };
  render() {
    return <div className="row">{this.renderProduct()}</div>;
  }
}
