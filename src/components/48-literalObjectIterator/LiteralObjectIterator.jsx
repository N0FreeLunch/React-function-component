import React, {useState} from 'react';

const LiteralObjectIterator = () => {
  const [names, setNames] = useState([
    {id:1,text:'snowman'},
    {id:2,text:'ice'},
    {id:3,text:'snow'},
    {id:4,text:'wind'},
  ]);

  const [inputText, setInpuText] = useState('');
  const [nextId, setNextId] = useState(5);

  const nameList = names.map(name => <li key={name.id}>{name.text}</li>)
  return <ul>{nameList}</ul>;

}

export default LiteralObjectIterator;
