import { logements, textesapropos } from './api';


export function getLogements(){                     //return array for encapsulation
    return logements.map(item=>item);
}

export function getLogement(Id){
return logements.find((item)=> item.id === Id)       //return logemt that matches ID 
}


export function getContents(){
	return textesapropos.map(item => item);
}

export function getKeywords(){
	return textesapropos.map(item => item.id);
}

export function getContent(Id){
	return textesapropos.find((item)=> item.id === Id)
}

