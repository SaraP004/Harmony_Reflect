import { useState, useEffect } from 'react';

const useCharacterAnimation = (characterImages, animationType, setAnimationType) => {
  const [characterImage, setCharacterImage] = useState(characterImages[animationType][0]);

  useEffect(() => {
    let images = characterImages[animationType];
    let frame = 0;
    const interval = setInterval(() => {
      setCharacterImage(images[frame]);
      frame = (frame + 1) % images.length;
    }, 300);

    if (animationType !== 'default') {
      const timeout = setTimeout(() => {
        setAnimationType('default');
      }, 3000);
      return () => {
        clearInterval(interval);
        clearTimeout(timeout);
      };
    }

    return () => clearInterval(interval);
  }, [animationType]);

  return characterImage;
};

export default useCharacterAnimation;
