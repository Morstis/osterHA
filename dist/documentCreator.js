class stringHelper {
    toTitleCase(input) {
        return input.slice(0)[0].toUpperCase() + input.slice(1);
    }
}
export class DocumentCreator extends stringHelper {
    constructor() {
        super();
    }
    childAppender(type, text, parent) {
        //Referenz: https://developer.mozilla.org/de/docs/Web/API/Node/appendChild
        const node = document.createElement(type);
        const textNode = document.createTextNode(text);
        node.append(textNode);
        parent.appendChild(node);
    }
    createUL(list, element) {
        const _element = element
            ? element
            : document.body.appendChild(document.createElement('ul'));
        list.forEach(e => this.childAppender('li', this.toTitleCase(e), _element));
    }
}
//# sourceMappingURL=documentCreator.js.map