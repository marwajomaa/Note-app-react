import React ,{Component} from 'react';
import { FaPencilAlt } from 'react-icons/fa';
import { IoMdTrash } from 'react-icons/io';
import './style.css'

class Note extends Component {
 state ={
   edit:false
 }

handleEdit =()=>{
  this.setState({edit:true})
}

save=(e)=>{
   e.preventDefault();
   const { props: { index }, _newNote: { value } } = this;
   this.props.update(value,index)
   this.setState({ edit: false });
}

remove=()=>{
  this.props.remove(this.props.index)
}

renderNote=()=>{
  return(
      <div>
      <p>{this.props.children}</p>
      <button onClick={this.handleEdit}><FaPencilAlt/></button>
      <button onClick={this.remove}><IoMdTrash /></button>
      </div>
    )
  }

editNote=()=>{
    return(
      <form onSubmit={this.save}>
      <textarea ref={input=>this._newNote =input}/>
      <button>save</button>
      </form>
    )
  }
render(){
    return(
      this.state.edit?this.editNote():this.renderNote()
    )
  }

}

export default Note;
