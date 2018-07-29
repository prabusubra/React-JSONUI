import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import AttrTempHome from "./AttrTempComponents/AttrTempHome";
import EntityTempHome from "./EnitityComponents/EntityTempHome";

class Slidebar extends Component {
  state = {
    slides: [
      {
        path: "/",
        exact: true,
        main: () => <AttrTempHome />
      },
      {
        path: "/domain",
        exact: true,
        main: () => <EntityTempHome />
      }
    ]
  };
  render() {
    return (
      <Router>
        <div style={{ display: "flex", height: "100%" }}>
          <div
            style={{
              padding: "40px",
              width: "20%",
              background: "#f0f0f0"
            }}
          >
            <ul style={{ listStyleType: "none", padding: 0 }}>
              <li>
                <Link to="/">Attribute Template</Link>
              </li>
              <li>
                <Link to="/domain">Domain Template</Link>
              </li>
            </ul>
          </div>

          <div style={{ flex: 1, padding: "10px" }}>
            {this.state.slides.map((route, index) => (
              // Render more <Route>s with the same paths as
              // above, but different components this time.
              <Route
                key={index}
                path={route.path}
                exact={route.exact}
                component={route.main}
              />
            ))}
          </div>
        </div>
      </Router>
    );
  }
}

export default Slidebar;
