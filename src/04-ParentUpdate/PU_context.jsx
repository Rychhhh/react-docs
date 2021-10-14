// Libraries
import React from "react";

// Local
import CardProduct from "../00-Components/CardProduct";

// Redux
// import { connect } from "react-redux"; // Untuk digunakan mapStateToProps
// import ActionType from "../05-Redux ( Folder Terpisah )/Reducer/globalActionType"; // Action Type from folder redux

// Context
import { RootContext } from "../App";

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
      <RootContext.Consumer>
        {(value) => {
          return (
            <React.Fragment>
              <div className="container">
                <button type="button" className="btn btn-secondary mb-2">
                  Cart <span className={this.dapatkanState()}>{value.state.totalOrder}</span>
                </button>

                {/* Pemisahan tombol + dan  - di components */}
                <CardProduct onAdd={() => value.dispatch({ type: "PLUS_HANDLE" })} onMinus={() => value.dispatch({ type: "MINUS_HANDLE" })} />
              </div>
            </React.Fragment>
          );
        }}
      </RootContext.Consumer>
    );
  }
}

// // ( mapStateToProps ) State Global
// const mapStateToProps = (state) => {
//   return {
//     order: state.totalOrder,
//   };
// };

// // ( mapDispatchToProps ) Dispatch
// const mapDispatchToProps = (dispatch) => {
//   return {
//     handlePlus: () => dispatch({ type: ActionType.PLUS_HANDLE }),
//     handleMinus: () => dispatch({ type: ActionType.MINUS_HANDLE }),
//   };
// };

// Connect Dispatch
// export default connect(mapStateToProps, mapDispatchToProps)(Product);
export default Product;
