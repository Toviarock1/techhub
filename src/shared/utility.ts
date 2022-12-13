import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

export const links = {
  linkedin:
    'https://www.linkedin.com/in/boi-uat-tech-hub-536b02232/?locale=nl_NL',
  facebook: 'https://www.facebook.com/UATHub/',
  twitter: 'https://twitter.com/uat_hub',
};
