import React, { useEffect } from 'react';

const Convert = ({ language, text }) => {
  useEffect(() => {
    console.log('Language Text');
  }, [language, text]);

  return <div></div>;
};

export default Convert;
