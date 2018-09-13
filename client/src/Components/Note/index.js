import React ,{Component} from 'react';
import { FaPencilAlt } from 'react-icons/fa';
import { IoMdTrash } from 'react-icons/io';
import './style.css'

class Note extends Component {
  state ={
    edit :false
  }

  handleEdit=()=>{
    this.setState({edit:true})
  }

  renderNote=()=>{
    return(
      <div className="Note">
      <p>{this.props.children}</p>
      <span>
      <button onClick={this.handleEdit}><FaPencilAlt/></button>
      <button><IoMdTrash/></button>
      </span>
      </div>
    )
  }

  save=()=>{
    alert('note is saved')
  }

 renderEditForm=()=>{
     return (
       <div>
       <textarea />
       <button onClick={this.save}>Save</button>
       </div>
     )
   }

   render(){
     return(
       this.state.edit?this.renderEditForm():this.renderNote()
     )
   }

}

export default Note;
