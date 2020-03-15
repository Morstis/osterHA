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
  childAppender(type: string, text: string, parent: HTMLElement): void {
    //Referenz: https://developer.mozilla.org/de/docs/Web/API/Node/appendChild
    const node: HTMLElement = document.createElement(type);
    const textNode: Text = document.createTextNode(text);
    node.append(textNode);
    parent.appendChild(node);
  }
  createUL(list: string[], element?: HTMLElement): void {
    const _element: HTMLElement = element
      ? element
      : document.body.appendChild(document.createElement('ul'));
    list.forEach(e => this.childAppender('li', this.toTitleCase(e), _element));
  }
}
