// Libraries
import React, { createContext } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

// Pages

import Card from "./01-Props/Card_Props";
import LifeCycle from "./03-Lifecycle/LifeCycle";
import Parent_Update from "./04-ParentUpdate/PU_context";
import DetailBlog from "./06-Home as API/DetailPost";
import BlogPost from "./06-Home as API/BlogPost_API";

// Pendefinisian Umum Context
export const RootContext = createContext();
const Provider = RootContext.Provider;

class App extends React.Component {
  // State Global Context
  state = {
    totalOrder: 0,
  };

  // Dispatch Context
  dispatch = (action) => {
    if (action.type === "PLUS_HANDLE") {
      return this.setState({
        totalOrder: this.state.totalOrder + 1,
      });
    }
    if (action.type === "MINUS_HANDLE") {
      let batas = 0;
      if (this.state.totalOrder > batas) {
        return this.setState({
          totalOrder: this.state.totalOrder - 1,
        });
      }
      return {
        totalOrder: this.state.totalOrder,
      };
    }
  };
  render() {
    console.log(this);
    return (
      <Provider
        value={{
          state: this.state,
          dispatch: this.dispatch,
        }}
      >
        <Router>
          <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <div class="container">
              <Link class="navbar-brand" to="/">
                React Indo Lesson
              </Link>
              <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                  <li class="nav-item">
                    <Link class="nav-link" to="/props">
                      Props
                    </Link>
                  </li>
                  <li class="nav-item">
                    <Link class="nav-link" to="/parentupdate">
                      Update Parent
                    </Link>
                  </li>
                  <li class="nav-item">
                    <Link class="nav-link" to="/lifecycle">
                      LifeCycle
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/blogpost">
                      Blog Post
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>

          {/* Components Global */}
          <div>
            <h1 className="text-center mt-3">Welcome To My Website</h1>
          </div>

          {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
          <Switch>
            <Route path="/blogpost" component={BlogPost} />

            <Route path="/props">
              <Props />
            </Route>

            <Route path="/parentupdate" component={Parent_Update} />
            <Route path="/lifecycle" component={LifeCycle} />
            <Route path="/detail/:postID" component={DetailBlog} />
          </Switch>
        </Router>
      </Provider>
    );

    function Props() {
      // Props
      return (
        <React.Fragment>
          <Card title="props pertama" desc="ini props pertama" />,
          <Card title="props kedua" desc="ini props kedua" />
          <Card title="props ketiga" desc="ini props ketiga" />
          <Card /> {/* Default Props diatur di Card_Props  */}
        </React.Fragment>
      );
    }
  }
}

export default App;
