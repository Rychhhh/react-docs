import React from "react";
import { connect } from "react-redux"; // Untuk digunakan mapStateToProps
import CardProduct from "../00-Components/CardProduct";
import ActionType from "../05-Redux ( Folder Terpisah )/Reducer/globalActionType"; // Action Type from folder redux

class Product extends React.Component {
  // handlePlus = () => {
  //   this.setState({
  //     order: this.state.order + 1,
  //   });
  // };

  // handleMinus = () => {
  //   if (this.state.order > 0) {
  //     this.setState({
  //       order: this.state.order - 1,
  //     });
  //   }
  // };

  dapatkanState() {
    let classes = "badge bg-";
    classes += this.props.order === 0 ? "warning" : "primary";
    return classes;
  }

  render() {
    return (
      <React.Fragment>
        <div className="container">
          <button type="button" className="btn btn-secondary mb-2">
            Cart <span className={this.dapatkanState()}>{this.state.order}</span>
          </button>

          {/* Pemisahan tombol + dan  - di components */}
          {/* <CardProduct onAdd={this.props.handlePlus} onMinus={this.props.handleMinus} /> */}
          <CardProduct onAdd={this.handlePlus} onMinus={this.handleMinus} />
        </div>
      </React.Fragment>
    );
  }
}

// ( mapStateToProps ) State Global
const mapStateToProps = (state) => {
  return {
    order: state.totalOrder,
  };
};

// ( mapDispatchToProps ) Dispatch
const mapDispatchToProps = (dispatch) => {
  return {
    handlePlus: () => dispatch({ type: ActionType.PLUS_HANDLE }),
    handleMinus: () => dispatch({ type: ActionType.MINUS_HANDLE }),
  };
};

// Connect Dispatch
export default connect(mapStateToProps, mapDispatchToProps)(Product);
