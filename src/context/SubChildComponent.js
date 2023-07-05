import { useContext } from 'react';
import { UsersContext } from './context';

const SubChildComponent = () => {
  const value = useContext(UsersContext);
  return (
    <>
      <div>SubChildComponent</div>
      <div>User: {value.user}</div>
    </>
  );
};

export default SubChildComponent;
