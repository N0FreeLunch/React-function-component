const view = function (dataList) {
    const contents = dataList.map(e => {
        return `
        <tr>
            <td style='border: 1px solid black'>${e[0]}</td>
            <td style='border: 1px solid black'>${e[1]}</td>
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