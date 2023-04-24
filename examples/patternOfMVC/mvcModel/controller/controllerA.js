class Controller {
    constructor (model) {
        this.model = model;
    }

    get modelDescription () {
        const modelDataArray = this.model.modelData.split(':');
        return {
            title : '💾 '+modelDataArray[0]+' 💾',
            contents : modelDataArray[1]
        }
    };

    get viewDescription () {
        const viewDataArray = this.model.viewData.split(':');
        return {
            title : '🧐 '+viewDataArray[0]+' 🧐',
            contents : viewDataArray[1]
        }
    };

    get controllerDescription () {
        const controllerDataArray = this.model.controllerData.split(':');
        return {
            title : '🎮 '+controllerDataArray[0]+' 🎮',
            contents : controllerDataArray[1]
        }
    };
}

const controllerObj = new Controller(new Model(data));

render(
    view([
        controllerObj.modelDescription,
        controllerObj.viewDescription,
        controllerObj.controllerDescription
    ])
);