import React, { useState, useEffect } from 'react';

const googleFonts = [
  'Dr Sugiyama',
  'DotGothic16',
  'Ewert',
  'Emblema One',
  'Ephesis',
  'Fenix',
  'Audiowide',
  'Gruppo',
  'Zen Tokyo Zoo',
  'Zen Loop'
];

const FontChanger = ({ text, interval = 2000 }) => {
  const [currentFontIndex, setCurrentFontIndex] = useState(0);
  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    const link = document.createElement('link');
    link.href = `https://fonts.googleapis.com/css2?family=${googleFonts.join('&family=').replace(/ /g, '+')}`;
    link.rel = 'stylesheet';
    document.head.appendChild(link);

    link.onload = () => setFontsLoaded(true);

    return () => {
      document.head.removeChild(link);
    };
  }, []);

  useEffect(() => {
    if (!fontsLoaded) return;

    const timer = setInterval(() => {
      setCurrentFontIndex((prevIndex) => (prevIndex + 1) % googleFonts.length);
    }, interval);

    return () => clearInterval(timer);
  }, [interval, fontsLoaded]);

  if (!fontsLoaded) {
    return <div>フォントを読み込み中...</div>;
  }

  return (
    <div style={{ 
      fontFamily: `"${googleFonts[currentFontIndex]}", sans-serif`,
      fontSize: '120px',
      color:"var(--orange01)",
      transition: 'font-family 0.3s ease'
    }}>
      {text}
    </div>
  );
};

export default FontChanger;