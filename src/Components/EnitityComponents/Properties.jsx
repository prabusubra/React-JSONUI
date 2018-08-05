import React, { Component } from "react";

import Flattable from "../FlatTable/FlatTable";

class Properties extends Component {
  state = {
    data: this.props.data || [],
    fields: []
  };
  componentDidMount() {
    console.log("hey buddy, i am inside componentDidMount....");
    this.getData();
  }
  getData = () => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${this.state.data}`)
      .then(response => response.json())
      .then(json => {
        console.log("Response from server...");
        console.log(json);
        this.setState({ fields: json });
      });
  };

  componentDidUpdate(prevProps, prevState, s) {
    console.log("hey buddy, i am inside componentDidUpdate....");
    console.log(this.props.data);
    if (prevProps.data != this.state.data) {
      this.getData();
    }
  }
  render() {
    console.log("render");
    console.log(this.props);
    //this.setState({ data: this.props.data });
    return (
      <div>
        <table>
          {Object.keys(this.state.fields).map((key, indx) => {
            return (
              <tbody key={indx}>
                <tr>
                  <td>{key}</td>
                </tr>
                <tr>
                  <td>{this.state.fields[key]}</td>
                </tr>
              </tbody>
            );
          })}
        </table>
      </div>
    );
  }
}

export default Properties;
