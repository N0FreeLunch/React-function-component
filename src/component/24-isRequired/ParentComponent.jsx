import IsRequired from './IsRequired.jsx';

const ParentComponent = () => {
  return (
    <div>
      <IsRequired  favoriteNumber={20}>children</IsRequired>
    </div>
  );
}

export default ParentComponent;
