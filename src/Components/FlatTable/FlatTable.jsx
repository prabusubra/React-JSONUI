import React, { Component } from "react";
import FlatTableHeader from "./FlatTableHeader";
import FlatTableRow from "./FlatTableRow";

class FlatTable extends Component {
  state = {
    header: [],
    data: []
  };

  static getDerivedStateFromProps(nextProps, prevState) {
    console.log(nextProps);
    if (nextProps.data != prevState.data) {
      return {
        data: nextProps.data,
        header: nextProps.header
      };
    }
    return null;
  }
  render() {
    return (
      <div>
        <table className="table-responsive-xl table-bordered">
          <thead>
            <tr>
              {this.state.header.map((element, index) => {
                return <FlatTableHeader key={index} header={element} />;
              })}
            </tr>
          </thead>
          <tbody>
            {this.state.data.map((element, index) => {
              return (
                <FlatTableRow
                  key={index}
                  header={this.state.header}
                  data={element}
                  showProperties={this.props.showProperties}
                />
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

export default FlatTable;
