import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTopOnNavigate = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null; // Este componente não renderiza nada
};

export default ScrollToTopOnNavigate;
