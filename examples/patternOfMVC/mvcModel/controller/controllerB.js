const modelData = model();
const viewData = modelData.map(e => [
    e.split(':')[0],
    e.split(':')[1]
]);

const definedView = view(viewData);

render(definedView);