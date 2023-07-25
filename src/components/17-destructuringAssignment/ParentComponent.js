import ParameterDestructuringAssignment from './ParameterDestructuringAssignment';
import VariableDestructuringAssignment from './VariableDestructuringAssignment';

const ParentComponent = () => {
  return (
    <div>
      <ParameterDestructuringAssignment>children</ParameterDestructuringAssignment>
      <hr />
      <VariableDestructuringAssignment>children</VariableDestructuringAssignment>
    </div>
  );
};

export default ParentComponent;
