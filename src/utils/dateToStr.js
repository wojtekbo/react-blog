import React from 'react';

const dateToStr = (date) => {
  return date.toISOString().split('T')[0];
};

export default dateToStr;
