import React , {Component} from 'react';

class Checkbox extends Component {
  state = {
   checked:true
 }

 handleChecked=()=>{
   this.setState({checked:!this.state.checked})
   console.log(this.state);
 }
  render(){
    var msg
    {this.state.checked?msg="checked":msg="unchecked"}
    return(
      <div>
        <input type="checkbox" onChange={this.handleChecked} defaultChecked={this.state.checked}/>
        <p>this checkbox is {msg}</p>
      </div>
    )
  }
}

export default Checkbox;
