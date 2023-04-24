const view = function (dataList) {
    const contents = dataList.map(e => {
        return `
        <tr>
            <td style='border: 1px solid black'>${e.title}</td>
            <td style='border: 1px solid black'>${e.contents}</td>
        </tr>
        `;
    }).join('');

    return `
        <table style='border: 1px solid black'>
            <tbody>
                ${contents}
            </tbody>
        </table>
    `;
}

const render = function (htmlTag) {
    document.querySelector('body').innerHTML = htmlTag;
}