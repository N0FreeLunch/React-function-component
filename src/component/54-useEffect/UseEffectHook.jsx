import React, {useState, useEffect} from 'react';

const UseEffectHook = () => {
  const [name, setName] = useState('');
  const [nickname, setNickname] = useState('');

  useEffect(() => {
    console.log('rendering completed!');
    console.log({
      name,
      nickname
    });
    return () => {
      console.log('cleanup');
      console.log(name);
    }
  });

  const onChangeName = e => {
    setName(e.target.value);
  }

  const onChangeNickname = e => {
    setNickname(e.target.value);
  }

  return (
    <div>
      <div>
        <input value={name} onChange={onChangeName}/>
        <input value={nickname} onChange={onChangeNickname}/>
      </div>
      <div>
        <b>name : </b> {name}
      </div>
      <div>
        <b>nick name : </b> {nickname}
      </div>
    </div>
  );
}

export default UseEffectHook;
