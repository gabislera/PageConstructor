import React, { createContext, useState, useContext } from "react";

const ResponsiveModeContext = createContext();

export const ResponsiveModeProvider = ({ children }) => {
  const [isResponsiveMode, setIsResponsiveMode] = useState(false);
  const [deviceView, setDeviceView] = useState("desktop");

  return (
    <ResponsiveModeContext.Provider
      value={{
        isResponsiveMode,
        setIsResponsiveMode,
        deviceView,
        setDeviceView,
      }}
    >
      {children}
    </ResponsiveModeContext.Provider>
  );
};

export const useResponsiveMode = () => useContext(ResponsiveModeContext);
