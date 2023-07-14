import FunctionFunctionComponent from "./FunctionFunctionComponent";
import NoReturnComponent from "./NoReturnArrowComponent";
import NoReturnNestedJsxComponent from './NoReturnNestedJsxComponent';
import NoNameComponent from "./NoNameComponent";
import ArrowFunctionComponent from "./ArrowFunctionComponent";

const Index = () => (
	<>
		<FunctionFunctionComponent />
		<hr />
		<NoReturnComponent />
		<hr />
		<NoReturnNestedJsxComponent />
		<hr />
		<NoNameComponent />
		<hr />
		<ArrowFunctionComponent />
	</>
);

export default Index;
