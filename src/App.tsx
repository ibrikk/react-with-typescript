import React from 'react';
import {TextField} from './components/TextField';

//props
//hooks
//render props


const App: React.FC = () => {
  return (
    <div>
      <TextField text='hello' person={{firstName: '', lastName: '' }}/>
    </div>
  )
}

export default App;
