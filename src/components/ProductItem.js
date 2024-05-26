import { Component } from "react";

export default class ProductItem extends Component {
  render() {
    let { item } = this.props;
    return (
      <div className="card" style={{ width: "18rem" }}>
        <img src={item.img} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{item.name}</h5>
          <p className="card-text">{item.price}</p>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <a href="#" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
            Go somewhere
          </a>
        </div>
      </div>
    );
  }
}
