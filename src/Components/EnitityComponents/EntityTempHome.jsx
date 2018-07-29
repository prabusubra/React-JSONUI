import React, { Component } from "react";
import EntityTempForm from "./EntityTempForm";
import EntityTempSubmit from "./EntityTempSubmit";
import FlatTable from "../FlatTable/FlatTable";

class EntityTempHome extends React.Component {
  state = {
    showComponent: false
  };
  doattronclick = () => {
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
  render() {
    let header = ["name", "id", "city", "pin"];
    let data = [
      { name: "prabu", id: "001", city: "Blore", pin: "560028" },
      { name: "Ram", id: "002", city: "chennai", pin: "560028" },
      { name: "Bill", id: "003", city: "CA", pin: "7368" }
    ];

    return (
      <div>
        <button className="btn btn-primary m-4" onClick={this.doattronclick}>
          Create
        </button>
        {!this.state.showComponent ? (
          <FlatTable header={header} data={data} />
        ) : null}
        {this.state.showComponent ? <EntityTempForm /> : null}
        {this.state.showComponent ? (
          <EntityTempSubmit onSubmit={this.handleOnSubmit} />
        ) : null}
      </div>
    );
  }
}
export default EntityTempHome;
