import RenderUndefined from "./RenderUndefine";
import RenderNull from "./RenderNull";
import RenderEmptyString from "./RenderEmptyString";
import RenderString from "./RenderString";
import RenderNumber from "./RenderNumber";
import NotRenderComponent from "./NotRenderComponent";

function Index() {
	return (
		<div data='rendered_component'>
			<RenderString />
			<hr />
			<RenderNumber />
			<hr />
			<RenderUndefined />
			<hr />
			<RenderNull />
			<hr />
			<RenderEmptyString />
			<hr />
			{<RenderUndefined /> || <NotRenderComponent />}
			<hr />
			{RenderUndefined() || <NotRenderComponent />}
		</div>
	);
}

export default Index;
