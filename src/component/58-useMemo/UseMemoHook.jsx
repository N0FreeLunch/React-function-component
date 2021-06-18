import React, {useState, useMemo} from 'react';

const getAverage = numbers => {
  console.log('Calculating average...');
  if(numbers.length === 0) return 0;
  const sum = numbers.reduce((a,b) => a + b);
  return sum/numbers.length;
}

const UseMemoHook = () => {

}


export default UseMemoHook;
