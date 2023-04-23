const view = function () {
    const modelObj = new Model(data);
    const modelVelue = modelObj.modelData;
    const viewValue = modelObj.viewData;
    const controllerValue = modelObj.controllerData;
    return `
        <div>
            <div>${modelVelue.split(':')[0]}</div>
            <div>${modelVelue.split(':')[1]}</div>
        </div>
        <div>
            <div>${viewValue.split(':')[0]}</div>
            <div>${viewValue.split(':')[1]}</div>
        </div>
        <div>
            <div>${controllerValue.split(':')[0]}</div>
            <div>${controllerValue.split(':')[1]}</div>
        </div>
    `;
}

const render = function (htmlTag) {
    document.querySelector('body').innerHTML = htmlTag;
}

render(view())