import ChildComponent from './ChildComponent';

const ToBeDeliveredComponent = () => <div>ToBeDeliveredComponent</div>;

const ChildComponentProp = () => (
  <ChildComponent><ToBeDeliveredComponent /></ChildComponent>
);

export default ChildComponentProp;
