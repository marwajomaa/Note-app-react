import React , {Component} from 'react';
import Note from '../Note';

class Board extends Component {
 state ={
   notes:[
     {
       id:0,
       notemsg:'learn react'
     },
     {
       id:1,
       notemsg:'be strong'
     },
     {
       id:2,
       notemsg:'have fun'
     }
   ]
 }

//update note require passing value from child component to parent component using event 
updateNote = (newNote,i) => {
  return(
  this.setState(prevState => ({
    notes:this.state.notes.map(
      note=>(note.id !==i )? note : {...note, notemsg: newNote}
    )
  }))
)
}

removeNote=(id)=>{
  this.setState(prevState=>({
    notes:prevState.notes.filter(note=>note.id!==id)
  }))
}

 eachNote = (note,i) => {
   return(
   <Note index={note.id} key={note.id} update={this.updateNote} remove={this.removeNote}>{note.notemsg}</Note>
 )
 }

  render(){
    return(
      this.state.notes.map(this.eachNote)
    )
  }
}

export default Board ;
