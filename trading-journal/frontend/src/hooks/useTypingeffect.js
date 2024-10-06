import { useState, useMemo } from 'react';

const useTypingEffect = (texts, typingSpeed = 100, deletingSpeed = 50, pauseTime = 1000) => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [pause, setPause] = useState(false);

  useMemo(() => {
    let typingTimeout;

    const handleTyping = () => {
      const text = texts[currentIndex];
      const animatedPart = text;
      if (isDeleting) {
        setDisplayText(animatedPart.substring(0, displayText.length - 1));
        if (displayText === '') {
          setIsDeleting(false);
          setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length);
        }
      } else {
        setDisplayText(animatedPart.substring(0, displayText.length + 1));
        if (displayText === animatedPart) {
          setPause(true);
          setTimeout(() => {
            setPause(false);
            setIsDeleting(true);
          }, pauseTime);
        }
      }
    };

    if (!pause) {
      typingTimeout = setTimeout(handleTyping, isDeleting ? deletingSpeed : typingSpeed);
    }

    return () => clearTimeout(typingTimeout);
  }, [displayText, isDeleting, pause, texts, currentIndex, typingSpeed, deletingSpeed, pauseTime]);

  return displayText + ' Trade.';
};

export default useTypingEffect;
