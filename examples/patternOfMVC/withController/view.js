const view = function (modelDescription, viewDescription, controllerDescription) {
    return `
        <div>
            <div>${modelDescription.title}</div>
            <div>${modelDescription.contents}</div>
        </div>
        <div>
            <div>${viewDescription.title}</div>
            <div>${viewDescription.contents}</div>
        </div>
        <div>
            <div>${controllerDescription.title}</div>
            <div>${controllerDescription.contents}</div>
        </div>
    `;
}

const render = function (htmlTag) {
    document.querySelector('body').innerHTML = htmlTag;
}