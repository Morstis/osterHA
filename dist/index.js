import { DocumentCreator } from './documentCreator.js';
const kurse = [
    { name: 'deutsch', img: '', link: '' },
    { name: 'mathe', img: '', link: '' },
    { name: 'physik', img: '', link: '' },
    { name: 'philosophie', img: '', link: '' },
    { name: 'deutsch', img: '', link: '' },
    { name: 'informatik', img: '', link: '' },
    { name: 'englisch', img: '', link: '' },
    { name: 'politik', img: '', link: '' },
    { name: 'geschichte', img: '', link: '' },
    { name: 'darstellendes spiel', img: '', link: '' },
    { name: 'seminarfach', img: '', link: '' },
    { name: 'sport', img: '', link: '' }
];
const dC = new DocumentCreator();
dC.childAppender('h1', 'Meine Kurse in der Oberstufe', document.body);
dC.createUL(kurse.map(x => x.name));
//# sourceMappingURL=index.js.map