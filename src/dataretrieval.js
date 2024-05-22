import { datalogements } from "./api";
import { datatextesapropos } from "./api";



function checkImport(value, name) {
    if (!value) {
        throw new Error(`Import ${name} not found`);
    }
}

checkImport(datalogements, 'datalogements');
checkImport(datatextesapropos, 'datatextesapropos');


const logements =
    datalogements.map(item => item);
const textesapropos =
    datatextesapropos.map(item => item)


export function getLogements() {
    if (!logements.every(item => Object.prototype.hasOwnProperty.call(item, 'id'))) {
        throw new Error('contenu indisponible');
    }                   //return array for encapsulation
    return logements.map(item => item);
}

export function getLogement(id) { //id minus

    if (!logements.every(item => Object.prototype.hasOwnProperty.call(item, 'id'))) {
        throw new Error('contenu indisponible');
    }
    return logements.find((item) => item.id === id)       //return logemt that matches id 
}

export function getContents() {
    if (!textesapropos) {
        throw new Error('contenu indisponible');
    }
    return textesapropos.map(item => item);
}

export function getKeywords() {
    if (!textesapropos.every(item => Object.prototype.hasOwnProperty.call(item, 'id'))) {
        throw new Error('contenu indisponible');
    }
    return textesapropos.map(item => item.id);
}

export function getContent(id) {
    if (!textesapropos.every(item => Object.prototype.hasOwnProperty.call(item, 'id'))) {
        throw new Error('contenu indisponible');
    }

    return textesapropos.find((item) => item.id === id)
}
