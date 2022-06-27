import React from 'react';
import { useEffect } from 'react';
import { useLocation } from 'react-router';

type SearchBarTypes = {
  children: React.ReactNode;
};

const ScrollToTop: React.FC<SearchBarTypes> = ({ children }) => {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return <>{children}</>;
};

export default ScrollToTop;
