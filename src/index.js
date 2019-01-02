import React, { Component } from "react";
import ReactDOM from "react-dom";
import _ from "lodash";

import "./styles.css";

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ItemList: [],
      immutableItemList: [],
      SelectedItemList: []
    };
  }

  componentDidMount() {
    this.setState({
      ItemList: this.props.defaultItemList,
      immutableItemList: this.props.defaultItemList
    });
  }

  btnForwardClick = items => {
    const { immutableItemList, SelectedItemList } = this.state;
    let tempItemList = [...immutableItemList];
    let tempSelectedItem = [...SelectedItemList];
    let selectOptions = [...this.itemSelectList]
      .filter(option => option.selected)
      .map(option => {
        return { value: option.value, text: option.text };
      })
      .concat(tempSelectedItem);

    selectOptions.forEach((item, index) => {
      const elemIndex = _.findIndex(tempItemList, { value: item.value });
      elemIndex >= -1 && tempItemList.splice(elemIndex, 1);
    });

    this.setState({
      SelectedItemList: selectOptions,
      ItemList: tempItemList
    });

    /** get Selected All value for selected options */
    let actualSelectedOptions = [...this.itemDeselectedList]
      .filter(option => option.selected)
      .map(option => {
        return { value: option.value, text: option.text };
      });
    this.props.onChangeValue(actualSelectedOptions);
  };

  btnBackwordClick = items => {
    let selectOptions = [...this.itemDeselectedList]
      .filter(option => option.selected)
      .map(option => {
        return { value: option.value, text: option.text };
      });

    let previousOptions = [...this.itemSelectList]
      .filter(option => option)
      .map(option => {
        return { value: option.value, text: option.text };
      })
      .concat(selectOptions);

    const { SelectedItemList } = this.state;
    let tempSelectedItem = [...SelectedItemList];
    selectOptions.forEach((item, index) => {
      const elemIndex = _.findIndex(tempSelectedItem, { value: item.value });
      elemIndex >= -1 && tempSelectedItem.splice(elemIndex, 1);
    });
    this.setState({
      ItemList: previousOptions,
      SelectedItemList: tempSelectedItem
    });
  };

  getSelectedSwitcherValue = () => {
    let selectOptions = [...this.itemDeselectedList]
      .filter(option => option)
      .map(option => {
        return { value: option.value, text: option.text };
      });
    console.log(selectOptions);
    this.props.getSelectedValue(selectOptions);
  };

  render() {
    return (
      <React.Fragment>
        <div className={"select-container"}>
          <div>
            <select
              ref={select => {
                this.itemSelectList = select;
              }}
              multiple={this.props.isMultiple || this.props.defaultMultiple}
              style={{
                width: `${this.props.selectWidth || this.props.defaultWidth}`,
                backgroundColor: `${this.props.leftBackgroundColor ||
                  this.props.defualtLeftBackgroundColor}`,
                border: `${this.props.leftSelectBorder ||
                  this.props.defaultLeftSelectBorder}`
              }}
              size={this.props.selectSize || this.props.defaultSize}
            >
              {this.state.ItemList.map((item, index) => {
                return (
                  <option
                    style={{
                      textAlign: `${this.props.itemTextAlign ||
                        this.props.defaultItemTextAlign}`
                    }}
                    key={index}
                    value={item.value}
                  >
                    {item.text}
                  </option>
                );
              })}
            </select>
          </div>
          <div
            style={{
              margin: "5px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center"
            }}
          >
            <button
              style={{
                height: "25px",
                width: "35px",
                marginBottom: "5px"
              }}
              onClick={this.btnForwardClick}
            >
              &gt;&gt;
            </button>
            <button
              style={{ height: "25px", width: "35px" }}
              onClick={this.btnBackwordClick}
            >
              {" "}
              &lt;&lt;{" "}
            </button>
          </div>
          <div>
            <select
              ref={select => {
                this.itemDeselectedList = select;
              }}
              multiple={this.props.isMultiple || this.props.defaultMultiple}
              size={this.props.selectSize || this.props.defaultSize}
              style={{
                width: `${this.props.selectWidth || this.props.defaultWidth}`,
                backgroundColor: `${this.props.righBackground ||
                  this.props.defaultRightBackgroundColor}`,
                border: `${this.props.rightSelectBorder ||
                  this.props.defaultRightSelectBorder}`
              }}
            >
              {this.state.SelectedItemList.map((item, index) => {
                return (
                  <option
                    style={{
                      textAlign: `${this.props.itemTextAlign ||
                        this.props.defaultItemTextAlign}`
                    }}
                    value={item.value}
                    key={index}
                  >
                    {item.text}
                  </option>
                );
              })}
            </select>
          </div>
        </div>
        <div
          style={{
            marginTop: "10px",
            display: `${this.props.showGetValueButton ||
              this.props.defaultShowGetValueButton}`
          }}
        >
          <button onClick={this.getSelectedSwitcherValue}>Get Value</button>
        </div>
      </React.Fragment>
    );
  }
}

App.defaultProps = {
  defaultItemList: [
    { value: "one", text: "one" },
    { value: "two", text: "two" },
    { value: "three", text: "three" },
    { value: "four", text: "four" },
    { value: "five", text: "five" },
    { value: "six", text: "six" }
  ],
  defaultSize: 10,
  defaultWidth: "100px",
  defaultLeftSelectBorder: "2px solid lightgray",
  defaultRightSelectBorder: "2px solid lightgray",
  defaultRightBackgroundColor: "none",
  defualtLeftBackgroundColor: "none",
  defaultMultiple: true,
  defaultItemTextAlign: "left",
  defaultShowGetValueButton: "block"
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
