import RenderUndefined from "./RenderUndefine";
import RenderNull from "./RenderNull";
import RenderEmptyString from "./RenderEmptyString";
import NotRenderComponent from "./NotRenderComponent";

function Index () {
	return (
		<div data='rendered_component'>
			<RenderUndefined/>
			<hr/>
			<RenderNull/>
			<hr/>
			<RenderEmptyString/>
			<hr/>
			{<RenderUndefined/> || <NotRenderComponent/>}
			<hr/>
			{RenderUndefined() || <NotRenderComponent/>}
		</div>
	);
}
  
export default Index;
  