import React from 'react';

const ScrollLink = ({ to, duration, children }) => {
  const handleClick = (event) => {
    event.preventDefault();
    const targetElement = document.getElementById(to);
    if (targetElement) {
      const offsetTop = targetElement.offsetTop;
      const startingY = window.pageYOffset;
      const diff = offsetTop - startingY;
      let start;

      const step = (timestamp) => {
        if (!start) start = timestamp;
        const timeElapsed = timestamp - start;
        const percent = Math.min(timeElapsed / duration, 1);
        const easedPercent = easeInOutSmooth(percent);
        window.scrollTo(0, startingY + diff * easedPercent);

        if (timeElapsed < duration) {
          requestAnimationFrame(step);
        }
      };

      requestAnimationFrame(step);
    }
  };

  // Easing function for smooth animation
  const easeInOutSmooth = (t) => {
    return Math.sin(-13 * (t + 1) * Math.PI / 2) * Math.pow(2, -10 * t) + 1;
  };

  return <a href={`#${to}`} onClick={handleClick}>{children}</a>;
};

export default ScrollLink;
