const view = function (modelData, viewData, controllerData) {
        return `
        <div>
            <div>${modelData.key}</div>
            <div>${modelData.description}</div>
        </div>
        <br>
        <div>
            <div>${viewData.key}</div>
            <div>${viewData.description}</div>
        </div>
        <br>
        <div>
            <div>${controllerData.key}</div>
            <div>${controllerData.description}</div>
        </div>
    `;
}

const render = function (htmlTag) {
    document.querySelector('body').innerHTML = htmlTag;
}