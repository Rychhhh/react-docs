import React from "react";

class CardProduct extends React.Component {
  render() {
    return (
      <React.Fragment>
        {this.props.chidlren}
        <div className="card" style={{ width: "18rem" }}>
          <img src="" className="card-img-top" alt="" />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          </div>
          <div className="card-body">
            <button href="#" onClick={() => this.props.onAdd(this.props.order)} className="card-link btn btn-primary">
              +
            </button>
            <button href="#" onClick={() => this.props.onMinus(this.props.order)} className="card-link btn btn-danger">
              -
            </button>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default CardProduct;
