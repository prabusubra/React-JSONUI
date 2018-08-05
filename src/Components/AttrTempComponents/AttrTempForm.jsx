import React, { Component } from "react";

class AttrTempForm extends Component {
  //constructor() {
  //super();
  //this.submitProperty = this.submitProperty.bind(this);
  //}
  state = {
    id: "",
    name: "",
    description: "",
    isDeleted: "",
    isEnabled: "",
    isProtected: "",
    isStatic: "",
    isMandatory: "",
    isUnique: "",
    propertytype: "",
    version: ""
  };
  render() {
    console.log(this.props);
    return (
      <div className="m-4">
        <button className="btn btn-primary m-4" onClick={this.props.onSubmit}>
          Back
        </button>
        <form className="m-4">
          <div className="form-group">
            <label htmlFor={"name"}> Name </label>{" "}
            <input
              className={"form-control"}
              id="name"
              type="text"
              value={this.state.name}
              onChange={this.setPropertyName}
            />
          </div>
          <div className="form-group">
            <label htmlFor={"description"}> Description </label>
            <input
              className={"form-control"}
              id="description"
              type="text"
              value={this.state.description}
              onChange={this.setPropertyDescription}
            />
          </div>
          <div className="form-group">
            <input
              className={"form-check-input"}
              id="isDeleted"
              type="checkbox"
              value={this.state.isDeleted}
              onChange={this.setIsDeleted}
            />
            <label htmlFor={"isDeleted"}> Deleted </label>
          </div>
          <div className="form-group">
            <input
              id="isEnabled"
              type="checkbox"
              value={this.state.isEnabled}
              className={"form-check-input"}
              onChange={this.setIsProtected}
            />
            <label htmlFor={"isEnabled"}> Enabled </label>
          </div>
          <div className="form-group">
            <input
              className={"form-check-input"}
              id="isProtected"
              type="checkbox"
              value={this.state.isProtected}
              onChange={this.setIsProtected}
            />
            <label htmlFor={"isProtected"}> Protected </label>
          </div>
          <div className="form-group">
            <input
              className={"form-check-input"}
              id="isStatic"
              type="checkbox"
              value={this.state.isStatic}
              onChange={this.setIsStatic}
            />
            <label htmlFor={"isStatic"}> static </label>
          </div>
          <div className="form-group">
            <input
              className={"form-check-input"}
              id="isMandatory"
              type="checkbox"
              value={this.state.isMandatory}
              onChange={this.setIsMandatory}
            />
            <label htmlFor={"isMandatory"}> Mandatory </label>{" "}
          </div>
          <div className="form-group">
            <input
              className={"form-check-input"}
              id="isUnique"
              type="checkbox"
              value={this.state.isUnique}
              onChange={this.setIsUnique}
            />
            <label htmlFor={"isUnique"}> Unique </label>{" "}
          </div>

          <div className="form-group">
            <label htmlFor={"propertytype"}> Type </label>{" "}
            <input
              className={"form-control"}
              id="propertytype"
              type="text"
              value={this.state.propertytype}
              onChange={this.setPropertyType}
            />
          </div>

          <div className="form-group">
            <label htmlFor={"version"}> version </label>{" "}
            <input
              className={"form-control"}
              id="version"
              type="text"
              value={this.state.version}
              onChange={this.setPropertyVersion}
            />
          </div>
          <button className="btn btn-primary m-4" onClick={this.props.onSubmit}>
            Submit
          </button>
        </form>
      </div>
    );
  }
  submitProperty = () => {
    //undefined with out arrow function
    console.log(this.state);
    console.log("submitted successfully...");
  };
  //setters
  setPropertyName = e => {
    this.setState((prevState, props) => {
      if (prevState != e.target.value) return { name: e.target.value };
    });
  };

  setPropertyDescription = e => {
    this.setState({ description: e.target.value });
  };
  setIsDeleted = e => {
    this.setState({ isDeleted: e.target.checked });
  };

  setIsProtected = e => {
    this.setState({ isProtected: e.target.checked });
  };
  setIsStatic = e => {
    this.setState({ isProtected: e.target.checked });
  };

  setIsMandatory = e => {
    this.setState({ isMandatory: e.target.checked });
  };
  setIsUnique = e => {
    this.setState({ isUnique: e.target.checked });
  };
  setPropertyType = e => {
    this.setState({ propertytype: e.target.value });
  };
  setPropertyVersion = e => {
    this.setState({ version: e.target.value });
  };
}

export default AttrTempForm;
