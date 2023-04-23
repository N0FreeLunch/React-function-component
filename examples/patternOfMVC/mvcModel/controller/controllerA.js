const modelData = model();
const viewData = modelData.map(e => ({
    key : e.split(':')[0],
    description : e.split(':')[1]
}));

const definedView = view(...viewData);

render(definedView);