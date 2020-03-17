export interface kurs {
  name: string;
  img: string;
  link: string;
}

class stringHelper {
  protected toTitleCase(input: string): string {
    return input.slice(0)[0].toUpperCase() + input.slice(1);
  }
}

export class DocumentCreator extends stringHelper {
  constructor() {
    super();
  }
  childTextAppender(type: string, text: string, parent: HTMLElement): void {
    //Referenz: https://developer.mozilla.org/de/docs/Web/API/Node/appendChild
    const _node: HTMLElement = document.createElement(type);
    const _textNode: Text = document.createTextNode(text);
    _node.append(_textNode);
    parent.appendChild(_node);
  }
  createUL(list: string[], element?: HTMLElement): void {
    const _element: HTMLElement = element
      ? element
      : document.body.appendChild(document.createElement('ul'));
    list.forEach(x =>
      this.childTextAppender('li', this.toTitleCase(x), _element)
    );
  }

  cardCreator(list: kurs[], element?: HTMLElement): void {
    const _element: HTMLElement = element
      ? element
      : document.body.appendChild(document.createElement('ul'));

    list.forEach(x => {
      const _card = document.createElement('div');
      this.childTextAppender('h3', this.toTitleCase(x.name), _card);
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
