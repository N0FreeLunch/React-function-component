class Model {
    constructor(data) {
        this.data = data;
    }

    get modelData() {
        return this.data.find(e => e.includes('모델'));
    }

    get controllerData() {
        return this.data.find(e => e.includes('뷰'));
    }

    get viewData() {
        return this.data.find(e => e.includes('컨트롤러'));
    }
}