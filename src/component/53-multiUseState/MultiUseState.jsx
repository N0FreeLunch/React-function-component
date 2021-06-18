import React, {useState} from 'react';

const MultiUseState = () => {
  const [name, setName] = useState('');
  const [nickName, setNickName] = useState('');

  const onChangeName = e => {
    setName(e.target.value);
  };

  const onChangeNickName = e => {
    setNickName(e.target.value);
  };

  return (
    <div>
      <div>
        <input value={name} onChange={onChangeName}/>
        <input value={nickName} onChange={onChangeNickName}/>
      </div>
      <div>
        <b>name : </b> {name}
      </div>
      <div>
        <b>nick name : </b> {nickName}
      </div>
    </div>
  );
}

export default MultiUseState;
