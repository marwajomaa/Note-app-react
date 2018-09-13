import React, { Component } from 'react';
import Hello from './props/stateful.js'
import HelloStateless from './props/stateless.js'
import Checkbox from './state/checkbox'
import Board from './Board'


class App extends Component {
  render(){
    return(
      <div>
        {/*<Hello firstName='Marwa' version={16} />
        <HelloStateless firstName='joe' version={16}/>
        <Checkbox /> */}

        <Board />
      </div>
    )
  }
}

export default App;
