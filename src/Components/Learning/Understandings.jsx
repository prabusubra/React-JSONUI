import React, { Component } from "react";
import { BrowserRouter, Router, Route, Link } from "react-router-dom";

class Home extends Component {
  state = {};
  render() {
    console.log("Home!!!");
    return <span>Home</span>;
  }
}

class Help extends Component {
  state = {};
  render() {
    console.log("Help!!!");
    return <span>Help</span>;
  }
}

class ReactLifecycle extends Component {
  /**
   * do the initial setup
   * will be called only once per loading
   * must call super() constructor other wise it will thow compilation issue.
   */
  constructor() {
    super();
    /**
     * used to store and retrieve data.
     */
    this.state = {
      data: "hello, How are you doing?"
    };
  }
  /**
   * when?, Called once Component is added to the HTML DOM.
   * what?, Data fetch can be performed here once HTML DOM is loaded.
   */
  componentDidMount() {
    console.log("DOM is ready...");
    
  }
  /**
   * when?, Called once Component is removed from the HTML DOM.
   * like garbage collector
   */
  componentWillUnmount() {
    console.log("Good Bye...");
  }
  /**
   * it will decide wheter component should render for all props.
   * only once it will be loaded, never updates component from props for false return value.
   * render method won't be called for setstate method.
   * return should be true or false.
   */
  shouldComponentUpdate(prevProps, nextState) {
    console.log("insdie shouldComponentUpdate...");
    return true;
  }
  render() {
    console.log("Inside render.....");
    return (
      <BrowserRouter>
        <div style={{ display: "flex" }}>
          <div
            style={{
              padding: "10px",
              width: "40%",
              background: "#FF6347"
            }}
          >
            <ul style={{ listStyleType: "none", padding: 0 }}>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/sec">Second</Link>
              </li>
              <li>
                <Link to="/third">Third</Link>
              </li>
            </ul>
            <Route path="/" component={() => <ParentComponent />} />
            <Route path="/sec" component={() => <Home />} />
            <Route path="/third" component={() => <Help />} />
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default ReactLifecycle;
/**
 * Child to parent component data transfer...
 */
class ParentComponent extends Component {
  state = {
    data: ""
  };
  processOnClick = e => {
    console.log(e);
    this.setState((prev, state) => {
      return { data: e };
    });
  };
  render() {
    return (
      <React.Fragment>
        <ChildComponent doOnClick={this.processOnClick} />
        <span>{this.state.data ? JSON.stringify(this.state.data) : ""}</span>
      </React.Fragment>
    );
  }
}

//export default ParentComponent;

class ChildComponent extends Component {
  state = {
    followers: ["user1", "user2", { user3: { name: "Ram" } }]
  };
  processOnClick = e => {
    e.preventDefault();
    this.props.doOnClick(this.state.followers);
  };
  render() {
    return (
      <button
        className="btn-btn-primary"
        value={this.state.followers}
        onClick={this.processOnClick}
      >
        Child
      </button>
    );
  }
}

//export default ChildComponent;
