class Controller {
    constructor (model) {
        this.model = model;
    }

    get htmlDescription () {
        const htmlDataArray = this.model.htmlData.split(':');
        return {
            title : htmlDataArray[0],
            contents : htmlDataArray[1]
        }
    };

    get cssDescription () {
        const cssDataArray = this.model.cssData.split(':');
        return {
            title : cssDataArray[0],
            contents : cssDataArray[1]
        }
    };

    get javascriptDescription () {
        const jsDataArray = this.model.jsData.split(':');
        return {
            title : jsDataArray[0],
            contents : jsDataArray[1]
        }
    };
}

const controllerObj = new Controller(new Model(data));

render(
    view([
        controllerObj.htmlDescription,
        controllerObj.cssDescription,
        controllerObj.javascriptDescription
    ])
);