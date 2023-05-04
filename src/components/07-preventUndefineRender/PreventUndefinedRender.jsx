function PreventUndefinedRender () {
  const name = undefined;
  return name || '값이 undefined입니다.';
}

export default PreventUndefinedRender;
