import React, {useState, useEffect} from 'react';

const UseEffectHook = () => {
  const [name, setName] = useState('');
  const [nickname, setNickname] = useState('');

  useEffect(() => {
    console.log("when component mounted");
    console.log({
      name,
      nickname
    });
    console.log("----------------------");
    return () => {
      console.log('before component unmounted');
      console.log(name);
      console.log("----------------------");
    }
  }, []);

  useEffect(() => {
    console.log('rendering');
    console.log({
      name,
      nickname
    });
    console.log("----------------------");
    return () => {
      console.log('berfore next rendering');
      console.log(name);
      console.log("----------------------");
    }
  });

  useEffect(() => {
    console.log('rendering by updating name variable');
    console.log({
      name,
      nickname
    });
    console.log("----------------------");
    return () => {
      console.log('before next rendering occured by changing name variable');
      console.log(name);
      console.log("----------------------");
    }
  },[name]);

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
