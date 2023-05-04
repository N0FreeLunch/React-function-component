import React, {useState} from 'react';

const UseStateObjectArgument = () => {
  const [form, setForm] = useState({
    username : '',
    message : ''
  });

  const {username, message} = form;
  const onChange = e => {
    const nextForm = {
      ...form,
      [e.target.name] : e.target.value
    };
    console.log('nextForm : ',nextForm);
    setForm(nextForm);
  };

  const onClick = () => {
    alert(username + ' : '+ message);
    setForm({
      username : '',
      message : ''
    });
  };

  const onKeyPress = e => {
    if(e.key === 'Enter') {
      onClick();
    }
  };

  return (
    <div>
      <h1>이벤트 연습</h1>
      <input
        type="text"
        name="username"
        placeholder="user name"
        value={username}
        onChange={onChange}
      />
      <input
        type="text"
        name="message"
        placeholder = "username"
        value={message}
        onChange={onChange}
        onKeyPress={onKeyPress}
      />
      <button onClick={onClick}>check</button>
    </div>
  );

}


export default UseStateObjectArgument;
