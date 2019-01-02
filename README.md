# react-item-switcher

Simple Item Switcher control. Faxible for change the design for control. More control over switching element.

### Usages

Basic Props to Initilize the `ItemSwitcher`

```javascript
<ItemSwitcher
  items= [{text: 'one', value='one'}, {text: 'two', value='two'}],
  isMultiple={true}
  selectSize={10}
  getSelectedValue={this.getSelectedValue}
  onChangeValue={this.onChangeValue}
/>
```

`items:` it will takes the options list array to load in left side list, using for selection.

`isMultiple:` it provide the functinality to select multiple value from list. `true` is enable the `multiple` selection
and `false` will remove the multiple select functionality.

`selectSize:` it will define the size of the list view. it task number value such as: `1,2,3...`.

`getSelectedValue:` it an event for `Get Value` button to get selected list items value.

`onChangeValue` it will provide the selected items value when change switch one items from left to right, you will get value of
selected right size list items array.

# Design Properties
