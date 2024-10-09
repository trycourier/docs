import React, { useState, useEffect } from 'react';

declare global {
  interface Window {
    Intercom?: (command: string, options?: any) => void;
  }
}

const IntercomLink: React.FC = () => {
  const [intercomLoaded, setIntercomLoaded] = useState<boolean>(false);

  useEffect(() => {
    const checkIntercom = setInterval(() => {
      if (window.Intercom) {
        setIntercomLoaded(true);
        clearInterval(checkIntercom);
      }
    }, 1000);

    return () => clearInterval(checkIntercom);
  }, []);

  const openIntercom = () => {
    if (window.Intercom) {
      window.Intercom('show');
    } else {
      console.error('Intercom is not loaded');
    }
  };

  if (!intercomLoaded) return null;

  return (
    <a href="#" onClick={(e: React.MouseEvent<HTMLAnchorElement>) => { e.preventDefault(); openIntercom(); }}>
      Chat with Support
    </a>
  );
};

export default IntercomLink;