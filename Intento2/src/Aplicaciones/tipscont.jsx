import React, { useState, useEffect } from 'react';

const tips = [
  "Cada hora, tómate un momento para recargar tu mente y seguir adelante.",
"Cuidar tu hidratación es crucial; beber agua te ayuda a cuidar de ti mismo.",
"Incluso 30 minutos de actividad diaria pueden fortalecer tanto cuerpo como mente.",
"Descansar 7-8 horas cada noche es fundamental para renovar tu energía y bienestar.",
"Levántate y estira, cada media hora, para liberar tu cuerpo de tensiones.",
"El agua es esencial para tu bienestar físico y mental; asegúrate de mantenerte hidratado.",
"El ejercicio regular puede ser un gran aliado para mejorar tu ánimo y energía diaria.",
"Un horario regular de sueño puede ser transformador para mejorar tu calidad de descanso."
];

const useTips = () => {
  const [currentTip, setCurrentTip] = useState(tips[0]);

  useEffect(() => {
    const tipInterval = setInterval(() => {
      setCurrentTip(tips[Math.floor(Math.random() * tips.length)]);
    }, 20000); 

    return () => clearInterval(tipInterval);
  }, []);

  return currentTip;
};

export default useTips;
