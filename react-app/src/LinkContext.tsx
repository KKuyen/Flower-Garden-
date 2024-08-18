
import React, { createContext, useContext, useState } from 'react';

const LinkContext = createContext({
  activeLink: '',
  setActiveLink: (link: string) => {},
});

export const useLink = () => useContext(LinkContext);

export const LinkProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [activeLink, setActiveLink] = useState<string>('');

  return (
    <LinkContext.Provider value={{ activeLink, setActiveLink }}>
      {children}
    </LinkContext.Provider>
  );
};