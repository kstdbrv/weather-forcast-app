import React, { useState, useEffect } from 'react';
import { ReactComponent as IconOffline } from '../../assets/images/offline-icon.svg';
import './header.scss';

const Header:React.FC = (): JSX.Element => {

  useEffect(() => { 
    checkNetworkStatus();
    window.addEventListener('online', checkNetworkStatus);
    window.addEventListener('offline', checkNetworkStatus);
  }, []);

  const [isOnline, setIsOnline] = useState<boolean>(true);

  const checkNetworkStatus = (): void => {
    navigator.onLine ?
      setIsOnline(true)
      : setIsOnline(false)
  };

  return (
    <header className="main-title">
      {!isOnline &&
        <IconOffline
          className="status-icon"
          title="offline"
        />}
      <h2>
        Weather
      </h2>
      <h2>
        forecast
      </h2>
    </header>
  )
};

export default Header;