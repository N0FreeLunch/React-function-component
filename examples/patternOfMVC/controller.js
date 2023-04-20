const dataObject = model();
let controllerData = dataObject.controllerDescription.split(':');
console.log(controllerData)
controllerData = {
    key : controllerData[0],
    description : controllerData[1],
}
let viewData = dataObject.viewDescription.split(':');
viewData = {
    key : viewData[0],
    description : viewData[1],
}
let modelData = dataObject.modelDescription.split(':');
modelData = {
    key : modelData[0],
    description : modelData[1],
}

const definedView = view(modelData, viewData, controllerData);

render(definedView)


