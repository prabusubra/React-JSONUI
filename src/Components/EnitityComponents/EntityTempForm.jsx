import React, { Component } from "react";

class EntityTempForm extends Component {
  constructor() {
    super();
    this.addAttrTemplate = this.addAttrTemplate.bind(this);
    this.removeAttrTemplate = this.removeAttrTemplate.bind(this);
  }
  state = {
    id: "",
    name: "",
    description: "",
    attributetemplate: [],
    attributetemplatefields: [{ name: "" }],
    version: ""
  };
  render() {
    console.log(this.props);
    let attrFields = [];
    this.state.attributetemplatefields.map((tempdata, indx) => {
      console.log("inside loop...");
      console.log(tempdata);
      attrFields.push(
        <div key={indx} className="form-row">
          <div className="col">
            <input
              className={"form-control"}
              id="attributetemplate"
              type="text"
              value={tempdata.name}
              onChange={this.setAttributeTemplate(indx)}
            />
          </div>
          <div className="col">
            <button
              type="button"
              className="btn btn-danger btn-sm"
              onClick={this.removeAttrTemplate(indx)}
            >
              {" "}
              Remove
            </button>
          </div>
        </div>
      );
    });
    //this.state.attributetemplatefields.forEach();
    return (
      <div className="m-4">
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
            <label htmlFor={"attributetemplate"}> Attribute Template </label>
            {attrFields}
          </div>
          <button
            type="button"
            className="btn btn-success btn-sm"
            onClick={this.addAttrTemplate}
          >
            Add
          </button>
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
        </form>
        <button className="btn btn-primary m-4" onClick={this.props.onSubmit}>
          Submit
        </button>
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
    this.setState({ name: e.target.value });
  };

  setPropertyDescription = e => {
    this.setState({ description: e.target.value });
  };
  setAttributeTemplate = idx => e => {
    const attrTempname = this.state.attributetemplatefields.map(
      (attr, sidx) => {
        if (idx !== sidx) return attr;
        return { ...attr, name: e.target.value };
      }
    );

    this.setState({ attributetemplatefields: attrTempname });
    console.log(" on attribute template ..." + e);
    //this.setState({ attributetemplate: e.target.value });
  };
  setPropertyVersion = e => {
    this.setState({ version: e.target.value });
  };

  addAttrTemplate = () => {
    this.setState({
      attributetemplatefields: this.state.attributetemplatefields.concat([
        { name: "" }
      ])
    });
  };

  removeAttrTemplate(e) {
    console.log("on remove ...");
    console.log(e);
    /*this.setState({
      attributetemplatefields: this.state.attributetemplatefields.filter(
        (temp, indx) => {
          return indx !== e;
        }
      )
    });*/
  }
}

export default EntityTempForm;
