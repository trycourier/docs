import React, { useState, useEffect } from 'react';
import styles from './intercomLink.module.css';
import { MessageCircleQuestion } from 'lucide-react';

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
    <button 
    className={styles.intercomLink} 
    onClick={() => {/* Open chat function */}}>
      <MessageCircleQuestion className={styles.intercomIcon} size={18} />
      Chat with Support
    </button>
  );
};

export default IntercomLink;