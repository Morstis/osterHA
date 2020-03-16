class stringHelper {
    toTitleCase(input) {
        return input.slice(0)[0].toUpperCase() + input.slice(1);
    }
}
export class DocumentCreator extends stringHelper {
    constructor() {
        super();
    }
    childTextAppender(type, text, parent) {
        //Referenz: https://developer.mozilla.org/de/docs/Web/API/Node/appendChild
        const _node = document.createElement(type);
        const _textNode = document.createTextNode(text);
        _node.append(_textNode);
        parent.appendChild(_node);
    }
    createUL(list, element) {
        const _element = element
            ? element
            : document.body.appendChild(document.createElement('ul'));
        list.forEach(x => this.childTextAppender('li', this.toTitleCase(x), _element));
    }
    cardCreator(list, element) {
        const _element = element
            ? element
            : document.body.appendChild(document.createElement('ul'));
        list.forEach(x => {
            const _card = document.createElement('div');
            this.childTextAppender('h3', x.name, _card);
            const _imgNode = document.createElement('img');
            const _linkNode = document.createElement('a');
            _linkNode.href = x.link;
            _imgNode.src = x.img;
            _linkNode.appendChild(_imgNode);
            _card.appendChild(_linkNode);
            _element.appendChild(_card);
        });
    }
}
//# sourceMappingURL=documentCreator.js.map