function ZeroCondition() {
  const number = 0;
  return (
    <div>
      {number && <div>내용</div>}
    </div>
    );
};

export default ZeroCondition;