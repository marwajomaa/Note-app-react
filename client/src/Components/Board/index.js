import React , {Component} from 'react';
import Note from '../Note';

class Board extends Component {
  state={
    notes:[
      {
        id:1,
        notemsg:'stay strong'
      },
      {
        id:2,
        notemsg:'code everyday'
      },
      {
        id:3,
        notemsg:'do not forget to smile'
      }
    ]
  }

  eachNote=(note,i)=>{
    return(
    <Note index={i}
    key={i}>
    {note.notemsg}
    </Note>
  )
  }
  render(){
    return(
        this.state.notes.map(this.eachNote)
    )
  }
}

export default Board ;
