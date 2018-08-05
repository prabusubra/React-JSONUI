import React, { Component } from "react";
import EntityTempForm from "./EntityTempForm";
import FlatTable from "../FlatTable/FlatTable";
import CreateEntity from "../common/CreateEntity";
import Properties from "../EnitityComponents/Properties";

class EntityTempHome extends React.Component {
  state = {
    showComponent: false,
    showProperties: false,
    data: []
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
  componentWillMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(json => {
        console.log(json);
        this.setState({ data: json });
      });
  }
  showProperties = tabledata => {
    this.setState({
      showProperties: true
    });
    console.log("showProperties" + tabledata);
    return <Properties key={tabledata} data={tabledata} />;
  };
  getRender = () => {
    let header = ["id", "name", "username", "email", "address"];
    if (this.state.showComponent) {
      return <EntityTempForm onSubmit={this.handleOnSubmit} />;
    } else {
      return (
        <React.Fragment>
          {" "}
          <CreateEntity doOnClick={this.doattronclick} />,
          <FlatTable
            header={header}
            data={this.state.data}
            showProperties={this.showProperties}
          />{" "}
        </React.Fragment>
      );
    }
  };
  render() {
    /*let data = [
      { name: "prabu", id: "001", city: "Blore", pin: "560028" },
      { name: "Ram", id: "002", city: "chennai", pin: "560028" },
      { name: "Bill", id: "003", city: "CA", pin: "7368" }
    ];*/
    return <div>{this.getRender()}</div>;
  }
}
export default EntityTempHome;
