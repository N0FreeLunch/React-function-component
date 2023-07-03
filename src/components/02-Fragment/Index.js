import FragmentWithModule from './FragmentWithModule';
import FragmentWithoutModule from './FragmentWithoutModule';
import JsxReturnComponent from './JsxReturnComponent';

function Index() {
  return (
    <div>
      <div description="fragment_component_area">
        Fragment JSX 태그를 사용한 경우
        <FragmentWithModule />
      </div>
      <hr />
      <div description="abbreviation_fragment_component_area">
        Fragment의 축약형 태그를 사용한 경우
        <FragmentWithoutModule />
      </div>
      <hr />
      <div description="jsx_return_component_area">
        함수의 인자로 태그를 전달하여 JSX로 출력하기
        <JsxReturnComponent />
      </div>
    </div>
  );
}

export default Index;