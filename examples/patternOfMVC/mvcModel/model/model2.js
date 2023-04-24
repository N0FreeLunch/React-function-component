class Model {
    constructor(data) {
        this.data = data;
    }

    get htmlData() {
        return this.data.find(e => e.includes('HTML'));
    }

    get cssData() {
        return this.data.find(e => e.includes('CSS'));
    }

    get jsData() {
        return this.data.find(e => e.includes('JavaScript'));
    }
}