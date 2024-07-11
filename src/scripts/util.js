import {users} from '../users/login.js';
import { charList } from '../data/charList.js';
import { itemList } from '../data/items/itemList.js';
import { eidolonList } from '../data/items/eidolonList.js';

function getUser(name){
    for(var i in users){
        if(users[i].name == name){
            return i;
        }
    }
}

function getCategory(category){
    for(var i in charList){
        if(charList[i].category == category){
            return i;
        }
    }
}

function getItemType(type){
    for(var i in itemList){
        if(itemList[i].type == type){
            return i;
        }
    }
}

function getItemTitle(type,id){
    var type = getItemType(type);
    for(var i in itemList[type].items){
        if(itemList[type].items[i].id == id){
            return itemList[type].items[i].title;
        }
    }
}

function getEidolonTitle(id){
    for(var i in eidolonList.items){
        if(eidolonList.items[i].id == id){
            return eidolonList.items[i].title;
        }
    }
}

export {getUser};
export {getCategory};
export {getItemType};
export {getItemTitle};
export {getEidolonTitle};
