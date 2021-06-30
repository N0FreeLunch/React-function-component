import classNames from 'classnames';

const Classnames = ({highlighted, theme}) => {
  console.log('classNames', classNames('one', 'two'));
  console.log('classNames', classNames('one', {two:true}));
  console.log('classNames', classNames('one', {two:false}));
  console.log('classNames', classNames('one', {two:'three'}));
  const myClass = 'hello';
  console.log('classNames', classNames('one', myClass, {myCondition:true}));

  return (
    <div>
      <div className={classNames('classname', {highlighted}, theme)}>
        use classnames
        <br/>
        variable highlighted : {highlighted}
        <br/>
        variable theme : {theme}
      </div>
    </div>
  )
};

export default Classnames;
