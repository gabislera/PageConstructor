import React, { createContext, useState, useContext } from 'react';

const ResponsiveModeContext = createContext();

export const ResponsiveModeProvider = ({ children }) => {
  const [isResponsiveMode, setIsResponsiveMode] = useState(false);

  return (
    <ResponsiveModeContext.Provider value={{ isResponsiveMode, setIsResponsiveMode }}>
      {children}
    </ResponsiveModeContext.Provider>
  );
};

export const useResponsiveMode = () => useContext(ResponsiveModeContext);