import React from 'react';
import {TextField} from './components/TextField';
import {Counter} from './components/Counter';

//props
//hooks
//render props


const App: React.FC = () => {
  return (
    <div>
      <TextField text='hello' person={{firstName: '', lastName: '' }}
      
      />
      <Counter>
        {({count, setCount}) => (<div>
          {count}
          <button onClick={() => setCount(count + 1)}>
            +
          </button>

        </div>)}
      </Counter>
    </div>
  )
}

export default App;
