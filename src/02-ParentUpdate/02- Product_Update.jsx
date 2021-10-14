import React from "react";
import CardProduct from "../00-Components/CardProduct";

class Product extends React.Component {
  state = {
    order: 0,
  };

  handlePlus = () => {
    this.setState({
      order: this.state.order + 1,
    });
  };

  handleMinus = () => {
    if (this.state.order > 0) {
      this.setState({
        order: this.state.order - 1,
      });
    }
  };

  dapatkanState() {
    let classes = "badge bg-";
    classes += this.state.order === 0 ? "warning" : "primary";
    return classes;
  }

  render() {
    return (
      <React.Fragment>
        <div className="container">
          <button type="button" className="btn btn-secondary mb-2">
            Cart <span className={this.dapatkanState()}>{this.state.order}</span>
          </button>

          <CardProduct onAdd={this.handlePlus} onMinus={this.handleMinus} />
        </div>
      </React.Fragment>
    );
  }
}

export default Product;
