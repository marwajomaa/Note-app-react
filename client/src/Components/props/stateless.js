import React from 'react';

const HelloStateless =({firstName, version})=>{
  return(
    <div>
      <h1>Hello {firstName} from stateless component</h1>
      <p>Learning react version {version} </p>
    </div>
  )
}

export default HelloStateless;
