import React from 'react';

const MapWithKey = () => {
  const names = ['snowman','ice','snow','wind'];
  const nameList = names.map((name,index) => <li key={index}>{name}</li>);
  return <ul>{nameList}</ul>
}

export default MapWithKey;
