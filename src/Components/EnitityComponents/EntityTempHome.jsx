import React, { Component } from "react";
import EntityTempForm from "./EntityTempForm";
import FlatTable from "../FlatTable/FlatTable";
import CreateEntity from "../common/CreateEntity";

class EntityTempHome extends React.Component {
  state = {
    showComponent: false,
    data: []
  };
  doattronclick = () => {
    console.log("I am in boss......");
    this.setState({
      showComponent: true
    });
  };

  handleOnSubmit = () => {
    console.log(" On Submit...");
    this.setState({
      showComponent: false
    });
  };
  componentWillMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(json => {
        console.log(json);
        this.setState({ data: json });
      });
  }

  render() {
    let header = ["id", "name", "username", "email", "address"];
    /*let data = [
      { name: "prabu", id: "001", city: "Blore", pin: "560028" },
      { name: "Ram", id: "002", city: "chennai", pin: "560028" },
      { name: "Bill", id: "003", city: "CA", pin: "7368" }
    ];*/

    return (
      <div>
        {!this.state.showComponent ? (
          <CreateEntity doOnClick={this.doattronclick} />
        ) : null}
        {!this.state.showComponent ? (
          <FlatTable header={header} data={this.state.data} />
        ) : null}
        {this.state.showComponent ? (
          <EntityTempForm onSubmit={this.handleOnSubmit} />
        ) : null}
      </div>
    );
  }
}
export default EntityTempHome;
