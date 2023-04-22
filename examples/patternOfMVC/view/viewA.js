const view = function () {
    const arrayArguments = Array.from(arguments);
    return arrayArguments.map(e => `
        <div>
            <div>${e.key}</div>
            <div>${e.description}</div>
        </div>
    `).join('<br>');
}

const render = function (htmlTag) {
    document.querySelector('body').innerHTML = htmlTag;
}