import React from 'react';
import { render } from 'react-dom';

class Checkbox extends React.Component {
  constructor(props) {
    super(props);
    this.state = { checked: false }
    this.handleCheck = this.handleCheck.bind(this);
  }
  
  handleCheck(e){
    console.log(e.target);
   this.setState({
    checked: e.target.checked
   })
 }
render(){
  return (
    <div>
      <input
      id ="checkbox_id"
      type="checkbox"
      checked={this.state.checked}
      onChange={this.handleCheck}
      />
      <label htmlFor="checkbox_id">
      </label>
    </div>  
);
}
}

export default Checkbox;