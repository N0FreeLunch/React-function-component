import FunctionFunctionComponent from "./FunctionFunctionComponent";
import ArrowFunctionComponent from "./ArrowFunctionComponent";
import NoReturnComponent from "./NoReturnArrowComponent";
import NoReturnNestedJsxComponent from './NoReturnNestedJsxComponent';
import NoNameComponent from "./NoNameComponent";

const Index = () => (
	<>
		<FunctionFunctionComponent />
		<hr />
		<ArrowFunctionComponent />
		<hr />
		<NoReturnComponent />
		<hr />
		<NoReturnNestedJsxComponent />
		<hr />
		<NoNameComponent />
	</>
);

export default Index;
