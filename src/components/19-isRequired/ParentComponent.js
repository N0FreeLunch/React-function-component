import IsRequired from './IsRequired';

const ParentComponent = () => {
  return (
    <div>
      <IsRequired favoriteNumber={20}>children</IsRequired>
    </div>
  );
};

export default ParentComponent;
