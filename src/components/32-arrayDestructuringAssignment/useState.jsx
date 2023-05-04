import React, {useState} from 'react';

const UseState = () => {
  const [message, setMessage] = useState('');
  const onClickEnter = () => setMessage('hello');
  const onClickLeave = () => setMessage('bye');

  return (
    <div>
      <button onClick={onClickEnter}>입장</button>
      <button onClick={onClickLeave}>퇴장</button>
      <h1>{message}</h1>
    </div>
  );
}

export default UseState;
