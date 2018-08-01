import React, { Component } from "react";

class FlatTableData extends Component {
  state = { data: this.props.data, header: this.props.header };
  render() {
    let tabledata = JSON.stringify(this.state.data);
    //tabledata = tabledata.replace(/[!#$%^&*"{}]/g, "");
    let content;
    if (this.state.header && this.state.header == "id") {
      content = (
        <td>
          <div>
            <table className="table-borderless">
              <tr>{tabledata}</tr>
              <tr>
                <td>
                  <button
                    value={tabledata}
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
            </table>
          </div>
        </td>
      );
    } else {
      content = <td>{tabledata}</td>;
    }
    return content;
  }
}

export default FlatTableData;
