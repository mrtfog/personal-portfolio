import React from 'react';

const ScrollLink = ({ to, children }) => {
  const handleClick = (event) => {
    event.preventDefault();
    const targetElement = document.getElementById(to);
    if (targetElement) {
      const offsetTop = targetElement.offsetTop;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth',
      });
    }
  };

  return <a href={`#${to}`} onClick={handleClick}>{children}</a>;
};

export default ScrollLink;
