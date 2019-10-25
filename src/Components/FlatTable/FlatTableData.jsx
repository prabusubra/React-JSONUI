import React, { Component } from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";

import Properties from "../EnitityComponents/Properties";

class FlatTableData extends Component {
  state = {
    data: this.props.data,
    header: this.props.header,
    alpha: [{ name: "Tester", city: "Bengaluru" }]
  };
  render() {
    let tabledata = JSON.parse(JSON.stringify(this.state.data));
    //tabledata = tabledata.replace(/[!#$%^&*"{}]/g, "");
    // tabledata = tabledata.replace(/[\"]/g, "");
    let content;
    if (this.state.header && this.state.header == "id") {
      content = (
        <td>
          <div>
            <table className="table-borderless">
              <tbody>
                <tr>
                  <td>
                    <BrowserRouter>
                      <div>
                        <Link to={`/getDetails/${tabledata}`}>{tabledata}</Link>
                        <Route
                          path={`/getDetails/${tabledata}`}
                          component={() => this.props.showProperties(tabledata)}
                        />
                      </div>
                    </BrowserRouter>
                  </td>
                </tr>
                <tr>
                  <td>
                    <button
                      value={this.state}
                      className="badge badge-danger"
                      onClick={this.props.doOnDelete}
                    >
                      Delete
                    </button>
                    <button
                      value={tabledata}
                      className="badge badge-warning"
                      onClick={this.props.doOnModify}
                    >
                      Modify
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </td>
      );
    } else {
       if (typeof tabledata === "object") {
        let innerObject = "";
        for (let tabledatakey in tabledata) {
          innerObject += tabledatakey + " : " + tabledata[tabledatakey];
        }
        content = <td>{innerObject}</td>;
      } else {
        content = <td>{tabledata}</td>;
      }
    }
    return content;
  }
}

export default FlatTableData;
