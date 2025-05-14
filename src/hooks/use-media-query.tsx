import { useEffect, useState } from 'react';

const useMediaQuery = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Cambia 768 según tus necesidades
    };

    handleResize(); // Check initial size

    window.addEventListener('resize', handleResize); // Detecta cambios de tamaño

    return () => {
      window.removeEventListener('resize', handleResize); // Limpieza del evento
    };
  }, []);

  return { isMobile };
};

export default useMediaQuery;
