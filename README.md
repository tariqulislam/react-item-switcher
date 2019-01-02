# react-item-switcher

Simple Item Switcher control. Faxible for change the design for control. More control over switching element.

### Usages

Basic Properties to Initilized the `ItemSwitcher`

```javascript
<ItemSwitcher
  items= {[{text: 'one', value:'one'}, {text: 'two', value:'two'}]}
  isMultiple={true}
  selectSize={10}
  getSelectedValue={this.getSelectedValue}
  onChangeValue={this.onChangeValue}
/>
```

1. `items:` it will takes the options list array to load in left side list, using for selection.

2. `isMultiple:` it provide the functinality to select multiple value from list. `true` is enable the `multiple` selection
   and `false` will remove the multiple select functionality.

3. `selectSize:` it will define the size of the list view. it task number value such as: `1,2,3...`.

4. `getSelectedValue:` it an event for `Get Value` button to get selected list items value.

5. `onChangeValue` it will provide the selected items value when change switch one items from left to right, you will get value of
   selected right size list items array.

# Example Code

```javascript
import React, { Component } from "react";
import ReactDOM from "react-dom";
import ItemSwitcher from "react-item-switcher";

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedItems: []
    }
  }

  getSelectedValue = (selectedItems) => {
    console.log(selectedItems)
    this.setState({selectedItems: selectedItems})
  };

  getChangeValue = (selectedItems) => {
    console.log(selectedItems)
    this.setState({selectedItems: selectedItems})
  }

  render() {
    return (
        <div>
          Test element
          <ItemSwitcher
            items= {[{text: 'one', value:'one'}, {text: 'two', value:'two'}]}
            isMultiple={true}
            selectSize={10}
            getSelectedValue={this.getSelectedValue}
            onChangeValue={this.getChangeValue}
          />
        </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
```

# Design Properties

|      Properties       |                                             Description                                             |
| :-------------------: | :-------------------------------------------------------------------------------------------------: |
|     `selectWidth`     |             using for increase or dicrease the width of list.(e.g selectWidth: "10px")              |
| `leftBackgroundColor` and `rightBackgroundColor` | using for add the background color in list box. its support `color code` and `hex` and `rgba` color |
|  `leftSelectBorder` and `rightSelectBorder`   |        using for add the border style in list box. (e.g leftSelectBorder: "1px solid blue")         |
|    `itemTextAlign`    |                   using for align the text. it supports `center`, `left`, `right`                   |
| `showGetValueButton`  |                   hide and show the `Get Value` button.it takes `true` or `false`                   |

## With Design Example

### Using `selectWidth` properties

```javascript
<ItemSwitcher
   ...
  selectSize={20}
   ...
/>
```
1. Using the numeric size to increase and decrease the size of the listbox

### using `leftBackgroundColor` and `rightBackgroundColor` properties
```javascript
<ItemSwitcher
  ...
  leftBackgroundColor={"#898"}
  rightBackgroundColor={"blue"}
  ...
/>
```
1. `leftBackgroundColor` will takes the `color code` or `hex` or `rgba` color
2. `rightBackgroundColor` will takes the `color code` or `hex` or `rgba` color

1. Using the numeric size to increase and decrease the size of the listbox

### using `leftSelectBorder` and `rightSelectBorder and `right properties
```javascript
<ItemSwitcher
  ...
  leftSelectBorder={"1px solid blue"}
  rightSelectBorder={"1px solid green"}
  ...
/>
```
1. those two property will change the switcher border colors and border width also

### using `itemTextAlign` to align the text for list box
```javascript
<ItemSwitcher
  ...
  itemTextAlign={"center"}
  ...
/>
```
1. this properties value supports `center` and `right` and `left` value

### using `showGetValueButton` properties

```javascript
<ItemSwitcher
 ...
 showGetValueButton={true}
 ...
/>
```
1. This properties takes `block` or `none` value. you can hide `none` value and show by `block` value for `Get Value` button.

## Get The value of the Selected Items

1. Add the State in `react constructor` by
```javascript
 this.state = {
      selectedItems: []
    }
```
2. call the function in `react element` by
```javascript
 getChangeValue = selectedItems => {
    console.log(selectedItems);
    this.setState({ selectedItems: selectedItems });
  };
```
3. Add the function to `noChangeValue` properties of `ItemSwitcher`
```javascript
/** add the method in react smart component */
<ItemSwitcher
  ...
  onChangeValue={this.getChangeValue}
  ...
/>
```
## Full Code Example of `react-item-switcher`

```javascript
import React, { Component } from "react";
import ReactDOM from "react-dom";
import ItemSwitcher from "react-item-switcher";

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedItems: []
    };
  }

  getSelectedValue = selectedItems => {
    console.log(selectedItems);
    this.setState({ selectedItems: selectedItems });
  };

  getChangeValue = selectedItems => {
    console.log(selectedItems);
    this.setState({ selectedItems: selectedItems });
  };

  render() {
    return (
      <div>
        Test element
        <ItemSwitcher
          items={[{ text: "one", value: "one" }, { text: "two", value: "two" }]}
          isMultiple={true}
          getSelectedValue={this.getSelectedValue}
          onChangeValue={this.getChangeValue}
          selectSize={5}
          leftBackgroundColor={"#898"}
          rightBackgroundColor={"#ddd"}
          rightSelectBorder={"2px solid green"}
          leftSelectBorder={"2px solid blue"}
          itemTextAlign={`right`}
          showGetValueButton={'none'}
        />
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
```