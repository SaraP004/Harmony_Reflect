import { useState, useEffect } from 'react';

const useTips = () => {
  const [currentTip, setCurrentTip] = useState('Cargando tip...');

  useEffect(() => {
    const fetchTip = async () => {
      try {
        const response = await fetch('http://localhost:3000/api/ai', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
        });

        if (response.ok) {
          const data = await response.json();
          setCurrentTip(data.tip);
        } else {
          setCurrentTip('No se pudo obtener el tip.');
        }
      } catch (error) {
        console.error('Error fetching tip:', error);
        setCurrentTip('No se pudo obtener el tip.');
      }
    };

    fetchTip();
    const tipInterval = setInterval(fetchTip, 20000);
    return () => clearInterval(tipInterval);
  }, []);

  return currentTip;
};

export default useTips;
