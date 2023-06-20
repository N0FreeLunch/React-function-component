function OrOperator() {
  const isEvenNumber = (num) => {
    return num%2 === 0;
  };

  return (
    <div>
        { isEvenNumber(5) || <h1>짝수가 아닙니다.</h1> }
    </div>
  );
}

export default OrOperator;