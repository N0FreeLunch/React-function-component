import ChildComponent from './ChildComponent';

const ChidrenPriority = () => {
  return (
    <>
      <ChildComponent children='attribute'></ChildComponent>
      <ChildComponent children='attribute'>inner component tag</ChildComponent>
    </>
  );
}

export default ChidrenPriority;
