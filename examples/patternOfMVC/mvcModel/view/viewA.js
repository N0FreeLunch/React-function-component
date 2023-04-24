const view = function (dataList) {
    return dataList.map(e => `
        <div>
            <div>${e.title}</div>
            <div>${e.contents}</div>
        </div>
    `).join('<br>');
}

const render = function (htmlTag) {
    document.querySelector('body').innerHTML = htmlTag;
}