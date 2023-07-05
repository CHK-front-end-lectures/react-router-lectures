import { useState } from 'react';
import ChildComponent from './ChildComponent';
import { UsersContext } from './context';

const ParentComponent = () => {
  const [user, setUser] = useState('Egzon');
  return (
    <UsersContext.Provider value={{ user }}>
      <div>This is Parent component! </div>
      <input 
        value={user} 
        onChange={(evt) => setUser(evt.target.value)} 
        />
      <div>User: {user}</div>
      <ChildComponent />
    </UsersContext.Provider>
  );
};

export default ParentComponent;
