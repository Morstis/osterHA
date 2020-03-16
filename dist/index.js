import { DocumentCreator } from './documentCreator.js';
import { kurse } from './kurse.js';
const dC = new DocumentCreator();
// dC.childAppender('h1', 'Meine Kurse in der Oberstufe', document.body);
// dC.createUL(
//   kurse.map(x => x.name),
//   document.getElementById('container')
// );
dC.cardCreator(kurse, document.getElementById('container'));
//# sourceMappingURL=index.js.map