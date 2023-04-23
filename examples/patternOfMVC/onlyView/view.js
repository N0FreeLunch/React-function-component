const view = function () {
    const modelVelue = data[0];
    const viewValue = data[1];
    const controllerValue = data[2];
    
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