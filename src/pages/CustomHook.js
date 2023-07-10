import { useEffect } from 'react';
import useOnlineStatus from '../hooks/useOnlineStatus';
import useScroll from '../hooks/useScroll';

const CustomHook = () => {
  const isOnline = useOnlineStatus();
  const scrollY = useScroll();

  useEffect(() => {
    console.log(scrollY);
  }, [scrollY]);

  return (
    <div className="online-status">
      {isOnline ? (
        <>
          <span className="circle-green circle"></span>
          <h1 className="green">Online</h1>
        </>
      ) : (
        <>
          <span className="circle-red circle"></span>
          <h1 className="red">Offline</h1>
        </>
      )}
    </div>
  );
};

export default CustomHook;
